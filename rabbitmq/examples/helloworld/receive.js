const amqp = require('amqplib/callback_api')

amqp.connect(
    'amqp://guest:guest@localhost',
    function (err, connection) {
        if (err) {
            console.log('err1: ', err)
            return;
        }
        connection.createChannel(function (err, channel) {
            if (err) {
                console.log('err2: ', err)
            }
            let queue = 'hello'
            channel.assertQueue(queue, {
                durable: false
            })
            console.log('Waiting for message in queue: ', queue);
            channel.consume(queue, function (msg) {
                console.log('Message: ', msg);
                console.log(' Received message: ', msg.content.toString());
            }, {
                noAck: true
            })
        })
    }
)