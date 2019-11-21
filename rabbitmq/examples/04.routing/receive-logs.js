const amqp = require('amqplib/callback_api');

amqp.connect('amqp://guest:guest@192.168.1.41', (err, connect) => {
    if (err) {
        throw err;
    }

    connect.createChannel((err, channel) => {
        if (err) {
            throw err;
        }

        let exchange = 'direct_logs';
        let router = 'info';

        channel.assertExchange(exchange, 'direct', {
            durable: false,
        });

        channel.assertQueue(
            '', {
                exclusive: true,
            },
            (err, q) => {
                if (err) {
                    throw err;
                }
                console.log('[x] Waiting for logs.');

                // router info
                channel.bindQueue(q.queue, exchange, router);
                channel.consume(q.queue, msg => {
                    console.log('[x] Msg: ', msg.content.toString());
                    console.log('[x] Routing: ', msg.fields.routingKey);
                });
            }, {
                noAck: true,
            }
        );
    });
});