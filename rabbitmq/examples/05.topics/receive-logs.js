const amqp = require('amqplib/callback_api');

amqp.connect('amqp://guest:guest@192.168.1.41', (err, connect) => {
    if (err) {
        throw err;
    }

    connect.createChannel((err, channel) => {
        if (err) {
            throw err;
        }

        let exchange = 'topic_logs';
        let key = '*.info';

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
                    console.log('[x] Msg: ', msg.content.toString());
                    console.log('[x] Routing: ', msg.fields.routingKey);
                });
            }, {
                noAck: true,
            }
        );
    });
});