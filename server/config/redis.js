const redis = require('redis');

const REDIS_PORT = process.env.REDIS_PORT || 6379;

const redisClient = redis.createClient(REDIS_PORT);

const cache = (req, res, next) => {
	redisClient.get(req.body, (err, data) => {
		if (err) throw err;

		data !== null
			? res.status(304).send(data)
			: next();
	});
};

module.exports = {redisClient};