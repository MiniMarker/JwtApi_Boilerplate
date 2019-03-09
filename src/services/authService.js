const {
	missingRequiredField,
	resourceNotFound,
	unauthorizedAction
} = require('../utils/messages/failMessages')
const bcrypt = require('bcrypt')
const authRepository = require('../repositories/authRepository')
const {
	successObject,
	failObject,
	errorObject,
	tokenObject
} = require('../utils/returnObjects')
const { signJwtToken } = require('../utils/jwtToken')

const BCRYPT_SALT_ROUNDS = 10

function getUser(req, res) {
	return res.status(200).send({
		username: req.user.username,
		role: req.user.role
	})
}

function login(req, res) {
	const username = req.user.username
	const role = req.user.role

	res.status(200).send(successObject(200, tokenObject({ username, role })))
}

function register(req, res) {
	const username = req.body.username
	const password = req.body.password
	const role = req.body.role

	if (username === null || username === undefined) {
		return res
			.status(400)
			.send(failObject(400, missingRequiredField('username')))
	} else if (password === null || password === undefined) {
		return res
			.status(400)
			.send(failObject(400, missingRequiredField('password')))
	} else if (role === null || role === undefined) {
		return res
			.status(400)
			.send(failObject(400, missingRequiredField('role')))
	}

	authRepository
		.getUserByUsername(username)
		.then(user => {
			if (user !== undefined) {
				return res
					.status(404)
					.send(
						failObject(
							404,
							resourceNotFound('user', 'username', username)
						)
					)
			}

			bcrypt
				.genSalt(10)
				.then(salt => {
					bcrypt
						.hash(password, salt)
						.then(hash => {
							authRepository
								.createUser(username, hash, 'USER')
								.then(() =>
									res
										.status(200)
										.send(
											successObject(
												200,
												tokenObject({ username, role })
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
								)
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
						)
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
				)
		})
		.catch(reason =>
			res
				.status(500)
				.send(errorObject(500, 'Error in getUserByUsername: ', reason))
		)
}

function roleAuthorization(roles) {
	return (req, res, next) => {
		let user = req.user
		console.log('roleAuthorization: signed in user = ', req.user)

		authRepository
			.getUserByUsername(user.username)
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
						)
				}

				if (roles.includes(user.role)) {
					return next()
				} else {
					return res
						.status(401)
						.json(
							failObject(401, unauthorizedAction(user.username))
						)
				}
			})
			.catch(() => {
				return res.status(500).send(errorObject(500, sqlError()))
			})
	}
}

module.exports = { login, register, roleAuthorization, getUser }
