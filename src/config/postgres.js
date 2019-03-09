/**
 * @author Christian Marker
 * @date 2019-03-09
 */
import { Client } from 'pg';
// const { createUsersTable } = require('../repositories/authRepository');

// eslint-disable-next-line
const dbCredentials = process.env.DATABASE_URL || 'postgresql://localhost';
const client = new Client(dbCredentials);

client
	.connect()
	.then(() => {
		// eslint-disable-next-line
		console.log('Connected to database...');
	})
	.catch(err => {
		// eslint-disable-next-line
		console.error('CONNECTION ERROR: ', err.stack);
	});

export default client;
