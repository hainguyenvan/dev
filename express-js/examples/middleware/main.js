console.log('example demo middleware ...');

const express = require('express');
const app = express();

function isCheckLogin(req,res, next) {
    let isLogin = true;
    req.isLogin = isLogin;
    res.send('send data');
    // next();
}

function middlewareThings(req, res, next) {
    console.log('middleware things !');
    next();
}

// app.use(isCheckLogin);

// middleware func
// app.use('/things', function(req, res, next) {
//     console.log('a request for things recived at: ', Date.now());
//     next();
// });

app.get('/things',middlewareThings,function(req, res) {
    res.send('things');
    console.log('end things');
});

app.get('/', function(req, res) {
    res.send('hello world !');
});

app.listen(3000);