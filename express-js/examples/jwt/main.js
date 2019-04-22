const jwt = require('jsonwebtoken');
const secret = 'hainv';

console.log('example demo jwt ...');
var token = jwt.sign({ id: 123 }, secret, { expiresIn: 1 });
console.log('token: ', token);

setTimeout(function () {
    console.log('validate token ...');
    jwt.verify(token, secret, function (err, decoded) {
        if (err) {
            console.log('err: ', err);
        } else {
            console.log('decoded: ', decoded);
        }
    })
}, 3000);