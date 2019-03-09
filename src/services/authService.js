import { createUser, getUserByUsername } from '../repositories/authRepository';
import {
	errorObject,
	failObject,
	successObject,
	tokenObject
} from '../utils/returnObjects';

import {
	missingRequiredField,
	resourceNotFound,
	unauthorizedAction
} from '../utils/messages/failMessages';
import bcrypt from 'bcrypt';
import { sqlError } from '../utils/messages/errorMessages';

const BCRYPT_SALT_ROUNDS = 10;

export const getUser = (req, res) => {
	return res.status(200).send({
		role: req.user.role,
		username: req.user.username
	});
};

export const login = (req, res) => {
	const username = req.user.username;
	const role = req.user.role;

	res.status(200).send(successObject(200, tokenObject({ role, username })));
};

export const register = (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const role = req.body.role;

	if (username === null || username === undefined) {
		return res
			.status(400)
			.send(failObject(400, missingRequiredField('username')));
	} else if (password === null || password === undefined) {
		return res
			.status(400)
			.send(failObject(400, missingRequiredField('password')));
	} else if (role === null || role === undefined) {
		return res
			.status(400)
			.send(failObject(400, missingRequiredField('role')));
	}

	getUserByUsername(username)
		.then(user => {
			if (user !== undefined) {
				return res
					.status(404)
					.send(
						failObject(
							404,
							resourceNotFound('user', 'username', username)
						)
					);
			}

			bcrypt
				.genSalt(BCRYPT_SALT_ROUNDS)
				.then(salt => {
					bcrypt
						.hash(password, salt)
						.then(hash => {
							createUser(username, hash, 'USER')
								.then(() =>
									res
										.status(200)
										.send(
											successObject(
												200,
												tokenObject({ role, username })
											)
										)
								)
								.catch(reason =>
									res
										.status(500)
										.send(
											errorObject(
												500,
												'Error in createUser: ',
												reason
											)
										)
								);
						})
						.catch(reason =>
							res
								.status(500)
								.send(
									errorObject(
										500,
										'Error in generation of hash: ',
										reason
									)
								)
						);
				})
				.catch(reason =>
					res
						.status(500)
						.send(
							errorObject(
								500,
								'Error in generation of salt: ',
								reason
							)
						)
				);
		})
		.catch(reason =>
			res
				.status(500)
				.send(errorObject(500, 'Error in getUserByUsername: ', reason))
		);
};

export const roleAuthorization = roles => {
	return (req, res, next) => {
		let user = req.user;

		getUserByUsername(user.username)
			.then(user => {
				if (user === undefined) {
					return res
						.status(400)
						.send(
							failObject(
								422,
								resourceNotFound(
									'user',
									'username',
									req.user.username
								)
							)
						);
				}

				if (roles.includes(user.role)) {
					return next();
				} else {
					return res
						.status(401)
						.json(
							failObject(401, unauthorizedAction(user.username))
						);
				}
			})
			.catch(() => {
				return res.status(500).send(errorObject(500, sqlError()));
			});
	};
};
