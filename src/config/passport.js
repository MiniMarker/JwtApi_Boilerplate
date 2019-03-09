import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import bcrypt from 'bcrypt';
import { getUserByUsername } from '../repositories/authRepository';

// Setup JwtStrategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
	secretOrKey: 'aSecret' //fs.readFileSync("./public.key", "utf8"),
	//algorithm: ["RS256"]
};

let jwtStrategy = new JwtStrategy(jwtOptions, function(payload, done) {
	return getUserByUsername(payload.username)
		.then(foundUser => {
			if (foundUser) {
				return done(null, foundUser);
			}

			return done(null, false);
		})
		.catch(err => {
			done(err, false);
		});
});

// Setup LocalStrategy
const localOptions = {
	passwordField: 'password',
	usernameField: 'username'
};

let localStrategy = new LocalStrategy(localOptions, function(
	username,
	password,
	done
) {
	getUserByUsername(username)
		.then(dbRes => {
			if (dbRes == null) {
				return done(null, false, {
					error: 'Login failed. Please try again.'
				});
			} else {
				bcrypt
					.compare(password, dbRes.password)
					.then(compRes => {
						if (compRes) {
							return done(null, dbRes);
						} else {
							return done(null, false, {
								error: 'Login failed. Please try again.'
							});
						}
					})
					.catch(() => {
						return done(null, false, {
							error: 'Login failed. Please try again.'
						});
					});
			}
		})
		.catch(() => {
			return done(null, false, {
				error: 'Login failed. Please try again.'
			});
		});
});

passport.use(jwtStrategy);
passport.use(localStrategy);

export default passport;
