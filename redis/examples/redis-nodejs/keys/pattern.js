const redis = require('redis');

// redis.createClient(port, host);
const client = redis.createClient();

let stringKey = 'stringKey';
client.set(stringKey, 'redis', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('set: ', res);
});

let stringKey1 = 'stringKey1';
client.set(stringKey1, 'redis1', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('set: ', res);
});

let stringKey2 = 'stringKey2';
client.set(stringKey2, 'redis2', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('set: ', res);
});

client.keys('string*', function(err, res) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('pattern: ', res);
    client.quit();
});