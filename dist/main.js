/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/app.js":
/*!***************************!*\
  !*** ./src/config/app.js ***!
  \***************************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _passport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passport */ \"./src/config/passport.js\");\n/* harmony import */ var _controllers_authController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/authController */ \"./src/controllers/authController.js\");\n\n\n\n\n\n // initialize express app\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('dev'));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: true\n})); // Initialize passport\n\napp.use(_passport__WEBPACK_IMPORTED_MODULE_4__[\"default\"].initialize());\napp.use(_passport__WEBPACK_IMPORTED_MODULE_4__[\"default\"].session()); // Routes\n\napp.use('/auth', _controllers_authController__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/config/app.js?");

/***/ }),

/***/ "./src/config/passport.js":
/*!********************************!*\
  !*** ./src/config/passport.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _repositories_authRepository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../repositories/authRepository */ \"./src/repositories/authRepository.js\");\n\n\n\n\n\n // Setup JwtStrategy\n\nvar jwtOptions = {\n  jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_2__[\"ExtractJwt\"].fromAuthHeaderWithScheme('jwt'),\n  secretOrKey: 'aSecret' //fs.readFileSync(\"./public.key\", \"utf8\"),\n  //algorithm: [\"RS256\"]\n\n};\nvar jwtStrategy = new passport_jwt__WEBPACK_IMPORTED_MODULE_2__[\"Strategy\"](jwtOptions, function (payload, done) {\n  console.log('PAYLOAD: ', payload);\n  return Object(_repositories_authRepository__WEBPACK_IMPORTED_MODULE_4__[\"getUserByUsername\"])(payload.username).then(function (foundUser) {\n    if (foundUser) {\n      return done(null, foundUser);\n    }\n\n    console.log('Did not find user');\n    return done(null, false);\n  }).catch(function (err) {\n    console.log('ERROR in finding user:', err);\n    done(err, false);\n  });\n}); // Setup LocalStrategy\n\nvar localOptions = {\n  usernameField: 'username',\n  passwordField: 'password'\n};\nvar localStrategy = new passport_local__WEBPACK_IMPORTED_MODULE_1__[\"Strategy\"](localOptions, function (username, password, done) {\n  Object(_repositories_authRepository__WEBPACK_IMPORTED_MODULE_4__[\"getUserByUsername\"])(username).then(function (dbRes) {\n    console.log(dbRes);\n\n    if (dbRes == null) {\n      return done(null, false, {\n        error: 'Login failed. Please try again.'\n      });\n    } else {\n      bcrypt__WEBPACK_IMPORTED_MODULE_3___default.a.compare(password, dbRes.password).then(function (compRes) {\n        if (compRes) {\n          return done(null, dbRes);\n        } else {\n          return done(null, false, {\n            error: 'Login failed. Please try again.'\n          });\n        }\n      }).catch(function (err) {\n        return done(null, false, {\n          error: 'Login failed. Please try again.'\n        });\n      });\n    }\n  }).catch(function () {\n    return done(null, false, {\n      error: 'Login failed. Please try again.'\n    });\n  });\n});\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(jwtStrategy);\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use(localStrategy);\n/* harmony default export */ __webpack_exports__[\"default\"] = (passport__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n//# sourceURL=webpack:///./src/config/passport.js?");

/***/ }),

/***/ "./src/config/postgres.js":
/*!********************************!*\
  !*** ./src/config/postgres.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * @author Christian Marker\n * @date 2019-03-09\n */\n\n\nvar _require = __webpack_require__(/*! ../repositories/authRepository */ \"./src/repositories/authRepository.js\"),\n    createUsersTable = _require.createUsersTable;\n\nvar dbCredentials = process.env.DATABASE_URL || 'postgresql://localhost';\nvar client = new pg__WEBPACK_IMPORTED_MODULE_0__[\"Client\"](dbCredentials);\nclient.connect().then(function () {\n  console.log('Connected to database...');\n}).catch(function (err) {\n  return console.error('CONNECTION ERROR: ', err.stack);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);\n\n//# sourceURL=webpack:///./src/config/postgres.js?");

/***/ }),

/***/ "./src/controllers/authController.js":
/*!*******************************************!*\
  !*** ./src/controllers/authController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);\n//Dependencies\n\n\n\nvar passportService = __webpack_require__(/*! ../config/passport */ \"./src/config/passport.js\"); // THIS NEEDS TO STAY!\n\n\nvar requireAuth = passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('jwt', {\n  session: false\n});\nvar requireLogin = passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('local', {\n  session: false\n}); //Local files\n\nvar authService = __webpack_require__(/*! ../services/authService */ \"./src/services/authService.js\");\n\nexpress__WEBPACK_IMPORTED_MODULE_0__[\"Router\"].post('/register', authService.register);\nexpress__WEBPACK_IMPORTED_MODULE_0__[\"Router\"].post('/login', requireLogin, authService.login);\nexpress__WEBPACK_IMPORTED_MODULE_0__[\"Router\"].get('/user', requireAuth, authService.getUser);\n/* harmony default export */ __webpack_exports__[\"default\"] = (express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]);\n\n//# sourceURL=webpack:///./src/controllers/authController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/app */ \"./src/config/app.js\");\n\n\nvar server = __webpack_require__(/*! http */ \"http\").Server(_config_app__WEBPACK_IMPORTED_MODULE_0__[\"app\"]); //Starting src\n\n\nvar port = process.env.PORT || 8080;\nserver.listen(port, function () {\n  console.log('Starting src on port ' + port);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/repositories/authQueries.js":
/*!*****************************************!*\
  !*** ./src/repositories/authQueries.js ***!
  \*****************************************/
/*! exports provided: createUserTableQuery, getUserByUsernameQuery, createUserQuery, updateUserPasswordQuery, deleteUserQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUserTableQuery\", function() { return createUserTableQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserByUsernameQuery\", function() { return getUserByUsernameQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUserQuery\", function() { return createUserQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUserPasswordQuery\", function() { return updateUserPasswordQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteUserQuery\", function() { return deleteUserQuery; });\nvar userTableName = \"users\";\nvar createUserTableQuery = \"\\nCREATE TABLE IF NOT EXISTS \".concat(userTableName, \" (\\n    id SERIAL,\\n    username text PRIMARY KEY,\\n    password text NOT NULL,\\n    role text NOT NULL\\n);\");\nvar getUserByUsernameQuery = \"SELECT * FROM \".concat(userTableName, \" WHERE username = $1;\");\nvar createUserQuery = \"INSERT INTO \".concat(userTableName, \" (username, password, role) VALUES ($1, $2, $3);\");\nvar updateUserPasswordQuery = \"UPDATE \".concat(userTableName, \" SET password = $2 WHERE username = $1;\");\nvar deleteUserQuery = \"DELETE FROM \".concat(userTableName, \" WHERE username = $1;\");\n\n//# sourceURL=webpack:///./src/repositories/authQueries.js?");

/***/ }),

/***/ "./src/repositories/authRepository.js":
/*!********************************************!*\
  !*** ./src/repositories/authRepository.js ***!
  \********************************************/
/*! exports provided: createUsersTable, createUser, getUserByUsername, updateUserPassword, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUsersTable\", function() { return createUsersTable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserByUsername\", function() { return getUserByUsername; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUserPassword\", function() { return updateUserPassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteUser\", function() { return deleteUser; });\n/* harmony import */ var _authQueries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authQueries */ \"./src/repositories/authQueries.js\");\n/* harmony import */ var _config_postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/postgres */ \"./src/config/postgres.js\");\n\n\nvar createUsersTable = function createUsersTable() {\n  return new Promise(function (resolve, reject) {\n    _config_postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(_authQueries__WEBPACK_IMPORTED_MODULE_0__[\"createUserTableQuery\"]).then(function () {\n      return resolve(true);\n    }).catch(function (err) {\n      return reject(err.toString());\n    });\n  });\n};\nvar createUser = function createUser(username, password, role) {\n  return new Promise(function (resolve, reject) {\n    _config_postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(_authQueries__WEBPACK_IMPORTED_MODULE_0__[\"createUserQuery\"], [username, password, role]).then(function () {\n      return resolve(true);\n    }).catch(function (err) {\n      return reject(err);\n    });\n  });\n};\nvar getUserByUsername = function getUserByUsername(username) {\n  return new Promise(function (resolve, reject) {\n    _config_postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(_authQueries__WEBPACK_IMPORTED_MODULE_0__[\"getUserByUsernameQuery\"], [username]).then(function (res) {\n      return res.rows.length > 0 ? resolve(res.rows[0]) : resolve(undefined);\n    }).catch(function (err) {\n      return reject(err);\n    });\n  });\n};\nvar updateUserPassword = function updateUserPassword(username, password) {\n  return new Promise(function (resolve, reject) {\n    _config_postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(_authQueries__WEBPACK_IMPORTED_MODULE_0__[\"updateUserPasswordQuery\"], [username, password]).then(function () {\n      return resolve(true);\n    }).catch(function (err) {\n      return reject(err);\n    });\n  });\n};\nvar deleteUser = function deleteUser(username) {\n  return new Promise(function (resolve, reject) {\n    _config_postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(_authQueries__WEBPACK_IMPORTED_MODULE_0__[\"deleteUserQuery\"], [username]).then(function () {\n      return resolve(true);\n    }).catch(function (err) {\n      return reject(err);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/repositories/authRepository.js?");

/***/ }),

/***/ "./src/services/authService.js":
/*!*************************************!*\
  !*** ./src/services/authService.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ../utils/messages/failMessages */ \"./src/utils/messages/failMessages.js\"),\n    missingRequiredField = _require.missingRequiredField,\n    resourceNotFound = _require.resourceNotFound,\n    unauthorizedAction = _require.unauthorizedAction;\n\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nvar authRepository = __webpack_require__(/*! ../repositories/authRepository */ \"./src/repositories/authRepository.js\");\n\nvar _require2 = __webpack_require__(/*! ../utils/returnObjects */ \"./src/utils/returnObjects.js\"),\n    successObject = _require2.successObject,\n    failObject = _require2.failObject,\n    errorObject = _require2.errorObject,\n    tokenObject = _require2.tokenObject;\n\nvar _require3 = __webpack_require__(/*! ../utils/jwtToken */ \"./src/utils/jwtToken.js\"),\n    signJwtToken = _require3.signJwtToken;\n\nvar BCRYPT_SALT_ROUNDS = 10;\n\nfunction getUser(req, res) {\n  return res.status(200).send({\n    username: req.user.username,\n    role: req.user.role\n  });\n}\n\nfunction login(req, res) {\n  var username = req.user.username;\n  var role = req.user.role;\n  res.status(200).send(successObject(200, tokenObject({\n    username: username,\n    role: role\n  })));\n}\n\nfunction register(req, res) {\n  var username = req.body.username;\n  var password = req.body.password;\n  var role = req.body.role;\n\n  if (username === null || username === undefined) {\n    return res.status(400).send(failObject(400, missingRequiredField('username')));\n  } else if (password === null || password === undefined) {\n    return res.status(400).send(failObject(400, missingRequiredField('password')));\n  } else if (role === null || role === undefined) {\n    return res.status(400).send(failObject(400, missingRequiredField('role')));\n  }\n\n  authRepository.getUserByUsername(username).then(function (user) {\n    if (user !== undefined) {\n      return res.status(404).send(failObject(404, resourceNotFound('user', 'username', username)));\n    }\n\n    bcrypt.genSalt(10).then(function (salt) {\n      bcrypt.hash(password, salt).then(function (hash) {\n        authRepository.createUser(username, hash, 'USER').then(function () {\n          return res.status(200).send(successObject(200, tokenObject({\n            username: username,\n            role: role\n          })));\n        }).catch(function (reason) {\n          return res.status(500).send(errorObject(500, 'Error in createUser: ', reason));\n        });\n      }).catch(function (reason) {\n        return res.status(500).send(errorObject(500, 'Error in generation of hash: ', reason));\n      });\n    }).catch(function (reason) {\n      return res.status(500).send(errorObject(500, 'Error in generation of salt: ', reason));\n    });\n  }).catch(function (reason) {\n    return res.status(500).send(errorObject(500, 'Error in getUserByUsername: ', reason));\n  });\n}\n\nfunction roleAuthorization(roles) {\n  return function (req, res, next) {\n    var user = req.user;\n    console.log('roleAuthorization: signed in user = ', req.user);\n    authRepository.getUserByUsername(user.username).then(function (user) {\n      if (user === undefined) {\n        return res.status(400).send(failObject(422, resourceNotFound('user', 'username', req.user.username)));\n      }\n\n      if (roles.includes(user.role)) {\n        return next();\n      } else {\n        return res.status(401).json(failObject(401, unauthorizedAction(user.username)));\n      }\n    }).catch(function () {\n      return res.status(500).send(errorObject(500, sqlError()));\n    });\n  };\n}\n\nmodule.exports = {\n  login: login,\n  register: register,\n  roleAuthorization: roleAuthorization,\n  getUser: getUser\n};\n\n//# sourceURL=webpack:///./src/services/authService.js?");

/***/ }),

/***/ "./src/utils/jwtToken.js":
/*!*******************************!*\
  !*** ./src/utils/jwtToken.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar signJwtToken = function signJwtToken(userObject) {\n  var privateKey = fs.readFileSync(\"./private.key\", \"utf8\");\n  var options = {\n    expiresIn: 10080\n  };\n  return jwt.sign(userObject, \"aSecret\", options);\n};\n\nvar validateJwtToken = function validateJwtToken(token) {\n  var publicKey = fs.readFileSync(\"./public.key\", \"utf8\");\n  var options = {\n    maxAge: 10080,\n    algorithm: [\"RS256\"]\n  };\n  return jwt.verify(token, publicKey, options);\n};\n\nmodule.exports = {\n  signJwtToken: signJwtToken\n};\n\n//# sourceURL=webpack:///./src/utils/jwtToken.js?");

/***/ }),

/***/ "./src/utils/messages/failMessages.js":
/*!********************************************!*\
  !*** ./src/utils/messages/failMessages.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * @author Christian Marker\n * @date 2019-03-09\n */\nvar missingRequiredField = function missingRequiredField(field) {\n  return \"Missing required field: \".concat(field);\n};\n\nvar resourceNotFound = function resourceNotFound(resource, field, value) {\n  return \"Can't find \".concat(resource, \" with \").concat(field, \": \").concat(value);\n};\n\nvar unauthorizedAction = function unauthorizedAction(username) {\n  return \"\".concat(username, \" is not authorized to access this content\");\n};\n\nmodule.exports = {\n  missingRequiredField: missingRequiredField,\n  resourceNotFound: resourceNotFound,\n  unauthorizedAction: unauthorizedAction\n};\n\n//# sourceURL=webpack:///./src/utils/messages/failMessages.js?");

/***/ }),

/***/ "./src/utils/returnObjects.js":
/*!************************************!*\
  !*** ./src/utils/returnObjects.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ./jwtToken */ \"./src/utils/jwtToken.js\"),\n    signJwtToken = _require.signJwtToken;\n\nvar successObject = function successObject(statusCode, data) {\n  return {\n    status: \"SUCCESS\",\n    statusCode: statusCode,\n    data: data,\n    message: null\n  };\n};\n\nvar failObject = function failObject(statusCode, message) {\n  return {\n    status: \"FAIL\",\n    statusCode: statusCode,\n    data: null,\n    message: message\n  };\n};\n\nvar errorObject = function errorObject(statusCode, message) {\n  return {\n    status: \"ERROR\",\n    statusCode: statusCode,\n    data: null,\n    message: message\n  };\n};\n\nvar tokenObject = function tokenObject(userObject) {\n  console.log(\"Entered tokenObject\");\n  return {\n    token: 'JWT ' + signJwtToken(userObject),\n    user: userObject\n  };\n};\n\nmodule.exports = {\n  successObject: successObject,\n  failObject: failObject,\n  errorObject: errorObject,\n  tokenObject: tokenObject\n};\n\n//# sourceURL=webpack:///./src/utils/returnObjects.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ })

/******/ });