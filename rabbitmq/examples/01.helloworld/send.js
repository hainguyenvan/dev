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
            let queue = 'hello'
            let msg = 'Hello world'
            channel.assertQueue(queue, {
                durable: false
            })
            channel.sendToQueue(queue, Buffer.from(msg))
            console.log('Send: ', msg)
        })
    }
)