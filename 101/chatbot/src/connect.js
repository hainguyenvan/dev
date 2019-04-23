const redis = require('redis');

class Connect {
    constructor() {
        this.redisClient = redis.createClient();
    }
}

module.exports = new Connect();