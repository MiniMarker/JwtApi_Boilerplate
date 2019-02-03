const {signJwtToken} = require("./jwtToken");

const successObject = (statusCode, data) => {
	return {
		status: "SUCCESS",
		statusCode,
		data,
		message: null
	}
};

const failObject = (statusCode, message) => {
	return {
		status: "FAIL",
		statusCode,
		data: null,
		message
	}
};

const errorObject = (statusCode, message) => {
	return {
		status: "ERROR",
		statusCode,
		data: null,
		message
	}
};

const tokenObject = (userObject) => {

	console.log("Entered tokenObject");

	return {
		token: 'JWT ' + signJwtToken(userObject),
		user: userObject
	}
};

module.exports = {successObject, failObject, errorObject, tokenObject};