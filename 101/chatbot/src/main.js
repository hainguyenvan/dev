const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const constant = require('./config/const');

// import router
const rootRouter = require('./routes/root');


// config api server
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('src/public'));
app.use(cors());
app.use('', rootRouter);

var server = require('http').createServer(app);
server.listen(constant.HTTP_PORT);
console.log('Listening http on port: ' + constant.HTTP_PORT);