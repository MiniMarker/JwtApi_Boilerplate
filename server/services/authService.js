const bcrypt = require('bcryptjs');
const authRepository = require("../repositories/authRepository");
const {successObject, failObject, errorObject, tokenObject} = require("../utils/returnObjects");
const {signJwtToken} = require("../utils/jwtToken");

const BCRYPT_SALT_ROUNDS = 10;

function getUser(req, res) {
	return res.status(200).send({
		username: req.user.username,
		role: req.user.role,
	});
}

function login(req, res, next){
	const username = req.user.username;
	const role = req.user.role;

	res.status(200).send(successObject(200, tokenObject({username, role})))
}

function register(req, res){

	const username = req.body.username;
	const password = req.body.password;
	const role = req.body.role;

	if(username === null || username === undefined) {
		return res.status(400).send({error: 'You must enter a username'});
	} else if(password === null || password === undefined) {
		return res.status(400).send({error: 'You must enter a password'});
	} else if(role === null || role === undefined) {
		return res.status(400).send({error: 'You must enter a role'});
	}

	authRepository.getUserByUsername(username)
		.then((user) => {
			if(user !== undefined) {
				return res.status(400).send(failObject(400, "User already exists"))
			}

			bcrypt.genSalt(10)
				.then((salt => {
					bcrypt.hash(password, salt)
						.then(hash => {
							authRepository.createUser(username, hash, "USER")
								.then(() =>  res.status(200).send(successObject(200, tokenObject({username, role}))))
								.catch((reason) => res.status(500).send(errorObject(500, "Error in createUser: ", reason)))
						})
						.catch((reason) => res.status(500).send(errorObject(500, "Error in generation of hash: ", reason)))
				}))
				.catch((reason) => res.status(500).send(errorObject(500, "Error in generation of salt: ", reason)))
		})
		.catch((reason) => res.status(500).send(errorObject(500, "Error in getUserByUsername: ", reason)))
}

function roleAuthorization(roles){

	return (req, res, next) => {

		let user = req.user;
		console.log("roleAuthorization: signed in user = ", req.user);

		client.query(`SELECT * FROM users WHERE username = $1`, [user.username])
			.then((dbRes) => {
				if(dbRes.rowCount === 0) {
					res.status(422).json({error: 'No user found.'});
					return next();
				}

				if(roles.includes(dbRes.rows[0].role)) {
					console.log("roleAuthorization: User with role found!", dbRes.rows[0].role);
					return next();
				} else {
					res.status(401).json({error: 'You are not authorized to view this content'});
					return next('Unauthorized');
				}

			})
			.catch(() => {
				return res.status(500).send({error: 'ERROR in SQL query'});
			})
	}
}

module.exports = {login, register, roleAuthorization, getUser};