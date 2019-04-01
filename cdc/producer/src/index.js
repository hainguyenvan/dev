var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var Config = require('./conf');

// import router
var rootRouter = require('./router/root');
var server = require('http').createServer(app);

// config api server
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// app.use(express.static('src/public'));
app.use(cors());
app.use('', rootRouter);

server.listen(Config.HTTP_PORT);
console.log('Listening http on port: ' + Config.HTTP_PORT);


// capture data
process.on('SIGINT', function () {
    console.log("Caught interrupt signal. Exiting...");
    process.exit();
});
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
    if (chunk != null) {
        process.stdout.write(`data: ${chunk}`);
    }
});
process.stdin.on('end', () => {
    process.stdout.write('end');
    process.stdin.resume();
});