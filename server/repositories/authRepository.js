const {Client} = require('pg');
const {createUserTableQuery, createUserQuery, getUserByUsernameQuery, updateUserPasswordQuery, deleteUserQuery} = require("./authQueries");

const dbCredentials = process.env.DATABASE_URL || "postgresql://localhost";
const client = new Client(dbCredentials);

client.connect()
	.then(() => console.log('Connected to database...'))
	.catch(err => console.error('CONNECTION ERROR: ', err.stack));

const createUsersTable = () => {
	return new Promise((resolve, reject) => {

		client.query(createUserTableQuery)
			.then(() => resolve(true))
			.catch((err) => reject(err.toString()))
	})
};

const createUser = (username, password, role) => {

	return new Promise((resolve, reject) => {

		client.query(createUserQuery, [username, password, role])
			.then(() => resolve(true))
			.catch((err) => reject(err))
	})
};

const getUserByUsername = (username) => {

	return new Promise((resolve, reject) => {

		client.query(getUserByUsernameQuery, [username])
			.then((res) => { return res.rows.length > 0 ? resolve(res.rows[0]) : resolve(undefined) })
			.catch((err) => reject(err.toString()))
	})
};

const updateUserPassword = (username, password) => {

	return new Promise((resolve, reject) => {

		client.query(updateUserPasswordQuery, [username, password])
			.then(() => resolve(true))
			.catch((err) => reject(err.toString()))
	})
};

const deleteUser = (username) => {

	return new Promise((resolve, reject) => {

		client.query(deleteUserQuery, [username, password])
			.then(() => resolve(true))
			.catch((err) => reject(err.toString()))
	})
};

module.exports = {createUsersTable, createUser, getUserByUsername, deleteUser};