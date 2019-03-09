import { Server } from 'http';
import { app } from './config/app';

const server = Server(app);

// Starting src
// eslint-disable-next-line
const port = process.env.PORT || 8080;

server.listen(port, () => {
	// eslint-disable-next-line
	console.log('Starting src on port ' + port);
});
