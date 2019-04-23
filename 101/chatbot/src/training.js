const redisClient = require('./connect').redisClient;
const datasets = require('./config/datasets');
const constant = require('./config/const');

function training() {
    datasets.forEach(item => {
        redisClient.hset(constant.HASHMAP, item.q, item.a, redisClient.print);
    });
}

training();