# Keys

## del
* Xóa key
* 0: Key không tồn tại
* 1: Key tồn tại
```
client.del(stringKey, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('del key: ', result);
    client.quit();
})
```

## dump
* Dump value của key
```
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
```

##  exits
* Kiểm tra xem một key có tồn tại trong redis không
* 0: Không tồn tại
* 1: Tồn tại
```
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

client.exists(stringKey, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('exits: ', res);
    client.quit();
});
```

## expire
* Xét thời gian tồn tại của một key, thời gian được tính bằng giây
```
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

client.expire(stringKey, 1, (err, res) => {
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
}, 3000);
```

## expireat
* Xét thời gian tồn tại của một key theo định dạng timestamp
```
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
```

## pexpire
* Xét thời gian tồn tại của key tính bằng milliseconds
```
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

client.pexpire(stringKey, 1000, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('pexpire: ', res);
});

setTimeout(function() {
    client.exists(stringKey, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('exits: ', res);
        client.quit();
    })
}, 2000);
```

## pattern
* Tìm kiếm tất cả các keys thỏa mãn một pattern
* Trả về một mảng các key thoản mãn pattern
```
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
```