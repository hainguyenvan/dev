const redis = require('redis');

// redis.createClient(port, host);
const client = redis.createClient();

// get keys
console.log('=== get value by key ===');
let stringKey = 'stringKey';
client.get(stringKey, function(error, result) {
    if (error) {
        console.log(error);
        return;
    }
    console.log('value: ', result);
});

// del key
console.log('=== del key ===');
//  0: false
//  1: true
client.del(stringKey, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('del key: ', result);
    client.quit();
})