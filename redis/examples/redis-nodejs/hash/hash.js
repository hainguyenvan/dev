const redis = require('redis');

// redis.createClient(port, host);
const client = redis.createClient();

let hashKey = 'hashKey';
let obj1 = {
    name: 'jack'
}

let obj2 = {
    name: 'jack2'
}

let obj3 = {
    name: 'jack2'
}

client.hmset(hashKey, 'key1', JSON.stringify(obj1), 'key2', JSON.stringify(obj2), 'key3', JSON.stringify(obj3), (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('hset: ', res);
});

client.hgetall(hashKey, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('hgetall: ', JSON.parse(res.key1).name);
    client.quit();
});