const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const authRepository = require('../repositories/authRepository');
const fs = require("fs");

// Setup JwtStrategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
	secretOrKey: fs.readFileSync("./public.key", "utf8"),
	algorithm: ["RS256"]
};

let jwtStrategy = new JwtStrategy(jwtOptions, function(payload, done) {

	console.log("PAYLOAD: ", payload);

	return authRepository.getUserByUsername(payload.username)
		.then((foundUser) => {
			if(foundUser) {
				return done(null, foundUser)
			}

			console.log("Did not find user");
			return done(null, false)
		})
		.catch((err) => {
			console.log("ERROR in finding user:", err);
			done(err, false)
		})
});


// Setup LocalStrategy
const localOptions = {
	usernameField: 'username',
	passwordField: "password"
};

let localStrategy = new LocalStrategy(localOptions, function(username, password, done) {

	authRepository.getUserByUsername(username)
		.then((dbRes) => {

			console.log(dbRes);

			if(dbRes == null) {
				return done(null, false, {error: 'Login failed. Please try again.'});
			} else {
				bcrypt
					.compare(password, dbRes.password)
					.then((compRes) => {

						if(compRes) {
							return done(null, dbRes)
						} else {
							return done(null, false, {error: 'Login failed. Please try again.'});
						}
					})
					.catch((err) => {
						return done(null, false, {error: 'Login failed. Please try again.'});
					})
			}
		})
		.catch(() => {
			return done(null, false, {error: 'Login failed. Please try again.'});
		})
});

passport.use(jwtStrategy);
passport.use(localStrategy);

module.exports = passport;