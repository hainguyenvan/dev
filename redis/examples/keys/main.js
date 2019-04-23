const redis = require('redis');
const client = redis.createClient();

client.on('connect', function () {
    console.log('connected to redis !');
});

client.on('error', function (error) {
    console.log('error: ', error);
});


// del key
var delKey = 'delKey';
client.set(delKey, 'del key', redis.print);
client.get(delKey, function (error, result) {
    if (error) {
        console.log('error: ', error);
        return;
    }
    console.log('get result -> ', result);
});

client.del(delKey, function (error, result) {
    if (error) {
        console.log(error);
        return;
    }
    console.log('del key -> ', result);
});

// dump key
var dumpKey = 'dumpKey';
client.set(dumpKey, 'dump key', redis.print);
client.dump(dumpKey, function (error, result) {
    if (error) {
        console.log('error: ', error);
        return;
    }
    console.log('dump key -> ', result);
});

// exists key
var existsKey = 'existsKey';
client.set(existsKey, 'exists key', redis.print);
client.exists(existsKey, function (error, result) {
    if (error) {
        console.log('error : ', error);
        return;
    }
    console.log('exists key -> ', result);
});