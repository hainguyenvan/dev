const amqp = require('amqplib/callback_api')

amqp.connect(
    'amqp://guest:guest@localhost',
    function (err, connection) {
        if (err) {
            console.log('err: ', err)
            return
        }
        connection.createChannel(function (err, channel) {
            if (err) {
                console.log('err: ', err)
            }
            let queue = 'task_queue';
            let msg = process.argv.slice(2).join(' ') || 'Hello world';
            channel.assertQueue(queue, {
                durable: false
            })
            channel.sendToQueue(queue, Buffer.from(msg), {
                persistent
            });
            console.log(" [x] Sent '%s'", msg);
            console.log('Send: ', msg);
        }, {
            noAck: false
        })
    }
)

// neu task fail thi channel.ask(msg) se gui lai message vao queue