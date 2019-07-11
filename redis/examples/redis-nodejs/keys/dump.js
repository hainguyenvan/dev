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

client.dump(stringKey, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('dump: ', res);
    client.quit();
});