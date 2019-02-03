const app = require("./config/app");
const server = require("http").Server(app);

//Starting server
const port = process.env.PORT || 8080;

server.listen(port, () => {
	console.log('Starting server on port ' + port);
});