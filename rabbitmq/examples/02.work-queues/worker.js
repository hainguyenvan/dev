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
            let queue = 'task_queue'
            channel.assertQueue(queue, {
                durable: false
            })
            console.log('Waiting for message in queue: ', queue);
            channel.consume(queue, function (msg) {
                console.log(' Received message: ', msg.content.toString());
                setTimeout(function () {
                    console.log('[x] Done');
                }, 5000);
            }, {
                noAck: true
            })
        })
    }
)