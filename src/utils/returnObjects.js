import { signJwtToken } from './jwtToken';

export const successObject = (statusCode, data) => {
	return {
		data,
		message: null,
		status: 'SUCCESS',
		statusCode
	};
};
export const failObject = (statusCode, message) => {
	return {
		data: null,
		message,
		status: 'FAIL',
		statusCode
	};
};

export const errorObject = (statusCode, message) => {
	return {
		data: null,
		message,
		status: 'ERROR',
		statusCode
	};
};

export const tokenObject = userObject => {
	return {
		token: 'JWT ' + signJwtToken(userObject),
		user: userObject
	};
};
