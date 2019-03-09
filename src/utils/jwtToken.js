import jwt from 'jsonwebtoken';
import fs from 'fs';

export const signJwtToken = userObject => {
	// eslint-disable-next-line
	let privateKey = fs.readFileSync('./private.key', 'utf8');
	const options = {
		expiresIn: 10080
	};

	return jwt.sign(userObject, 'aSecret', options);
};

export const validateJwtToken = token => {
	let publicKey = fs.readFileSync('./public.key', 'utf8');
	const options = {
		maxAge: 10080,
		algorithm: ['RS256']
	};

	return jwt.verify(token, publicKey, options);
};
