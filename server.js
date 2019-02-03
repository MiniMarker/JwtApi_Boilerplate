const app = require("./server/config/app");
const server = require("http").Server(app);
const {createUsersTable} = require("./server/repositories/authRepository");

//Starting server
const port = process.env.PORT || 8080;

createUsersTable();

server.listen(port, () => {
	console.log('Starting server on port ' + port);
});