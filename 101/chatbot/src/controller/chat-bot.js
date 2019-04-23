const redisClient = require('../connect').redisClient;
const constant = require('../config/const');
const fuzz = require('fuzzball');

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}


exports.training = function (req, res) {
    let q = req.body.q;
    let a = req.body.a;
    redisClient.hset(constant.HASHMAP, q, a, redisClient.print);
    res.send({
        status: 200,
        msg: 'Success !'
    });
}

exports.getAnswer = function (req, res) {
    let q = req.body.q;
    redisClient.hkeys(constant.HASHMAP, async function (error, keys) {
        if (error) {
            res.send({
                status: 200,
                msg: 'Success !',
                answer: 'help me answer !'
            });
            return;
        }

        let qKey;
        await asyncForEach(keys, async (key) => {
            let statistic = fuzz.ratio(key, q);
            if (statistic >= 60) {
                qKey = key;
            }
        });

        // get answer
        if (qKey) {
            redisClient.hmget(constant.HASHMAP, qKey, function (error, answer) {
                if (error) {
                    console.log('error: ', error);
                    res.send({
                        status: 200,
                        msg: 'Success !',
                        answer: 'help me answer !'
                    });
                } else {
                    res.send({
                        status: 200,
                        msg: 'Success !',
                        answer: answer[0]
                    });
                }
            });
        } else {
            res.send({
                status: 200,
                msg: 'Success !',
                answer: 'help me answer !'
            });
        }

    });
}