const redis = require('redis');

// redis.createClient(port, host);
const client = redis.createClient();

// check connect to redis server
client.on('connect', function () {
    console.log('redis client connected !');
});

client.on('error', function (err) {
    console.log('something went wrong ', err)
});

// example demo with string
var stringKey = 'stringKey';
client.set(stringKey, 'string value', redis.print);
client.get(stringKey, function (error, result) {
    if (error) {
        console.log(error);
        return;
    }
    console.log('get result -> ' + result);
});