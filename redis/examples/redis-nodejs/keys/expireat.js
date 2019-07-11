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

client.expireat(stringKey, 1293840000, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res);
});

setTimeout(function() {
    client.exists(stringKey, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(res);
        client.quit();
    })
}, 1000);