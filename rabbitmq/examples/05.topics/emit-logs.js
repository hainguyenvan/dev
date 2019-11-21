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
        let exchange = 'topic_logs';
        let key = 'anonymous.info';
        let msg = 'Hello World !';

        channel.assertExchange(exchange, 'topic', {
            durable: false,
        });

        channel.publish(exchange, key, Buffer.from(msg));
        console.log('[x] Sent msg: ', msg);
    });

    setTimeout(() => {
        connect.close();
        process.exit(0);
    }, 500);
});