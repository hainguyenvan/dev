const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

var nsp = io.of('/vietmed');

nsp.on('connection', function (socket) {
    console.log('A user connected.');
    setTimeout(function () {
        socket.emit('sendData', 'send data !');
    });

    socket.on('disconnect', function () {
        console.log('A user dis');
    });

    socket.on('emitData', function (data) {
        console.log('data ==================', data);
    })
})

http.listen(3000, function () {
    console.log('listening on: 3000');
})