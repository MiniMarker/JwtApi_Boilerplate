/**
 * @author Christian Marker
 * @date 2019-03-09
 */
import { Client } from 'pg'
const { createUsersTable } = require('../repositories/authRepository')

const dbCredentials = process.env.DATABASE_URL || 'postgresql://localhost'
const client = new Client(dbCredentials)

client
	.connect()
	.then(() => {
		console.log('Connected to database...')
	})
	.catch(err => console.error('CONNECTION ERROR: ', err.stack))

export default client
