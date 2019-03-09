import {
	createUserTableQuery,
	createUserQuery,
	getUserByUsernameQuery,
	updateUserPasswordQuery,
	deleteUserQuery
} from './authQueries'
import client from '../config/postgres'

export const createUsersTable = () => {
	return new Promise((resolve, reject) => {
		client
			.query(createUserTableQuery)
			.then(() => resolve(true))
			.catch(err => reject(err.toString()))
	})
}

export const createUser = (username, password, role) => {
	return new Promise((resolve, reject) => {
		client
			.query(createUserQuery, [username, password, role])
			.then(() => resolve(true))
			.catch(err => reject(err))
	})
}

export const getUserByUsername = username => {
	return new Promise((resolve, reject) => {
		client
			.query(getUserByUsernameQuery, [username])
			.then(res => {
				return res.rows.length > 0
					? resolve(res.rows[0])
					: resolve(undefined)
			})
			.catch(err => reject(err))
	})
}

export const updateUserPassword = (username, password) => {
	return new Promise((resolve, reject) => {
		client
			.query(updateUserPasswordQuery, [username, password])
			.then(() => resolve(true))
			.catch(err => reject(err))
	})
}

export const deleteUser = username => {
	return new Promise((resolve, reject) => {
		client
			.query(deleteUserQuery, [username])
			.then(() => resolve(true))
			.catch(err => reject(err))
	})
}
