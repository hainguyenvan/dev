const amqp = require('amqplib/callback_api');

amqp.connect('amqp://guest:guest@127.0.0.1', (err, connect) => {
    if (err) {
        throw err;
    }

    connect.createChannel((err, channel) => {
        if (err) {
            throw err;
        }

        let exchange = 'tracking.system.router';
        let key = '*.gps';

        channel.assertExchange(exchange, 'topic', {
            durable: false,
        });

        channel.assertQueue(
            'queue_topic', {
                exclusive: true,
            },
            (err, q) => {
                if (err) {
                    throw err;
                }
                channel.bindQueue(q.queue, exchange, key);
                channel.consume(q.queue, msg => {
                    console.log('[x] Msg topic: ', msg.content.toString());
                    console.log('[x] Routing: ', msg.fields.routingKey);
                });
            }, {
                noAck: true,
            }
        );
    });
});