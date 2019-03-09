import { app } from './config/app'
const server = require('http').Server(app)

//Starting src
const port = process.env.PORT || 8080

server.listen(port, () => {
	console.log('Starting src on port ' + port)
})
