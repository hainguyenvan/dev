const amqp = require('amqplib/callback_api');

amqp.connect('amqp://guest:guest@192.168.1.41', (err, connect) => {
    if (err) {
        throw err;
    }

    // connect rabbitmq
    connect.createChannel((err, channel) => {
        if (err) {
            throw err;
        }

        let exchange = 'direct_logs';
        let router = 'info';
        let msg = 'Hello World!';
        channel.assertExchange(exchange, 'direct', {
            durable: false,
        });

        // send message to queue with router info
        channel.publish(exchange, router, Buffer.from(msg));
        console.log('[x] Sent msg %s to router %s', msg, router);
    });

    setTimeout(() => {
        connect.close();
        process.exit(0);
    }, 500);
});