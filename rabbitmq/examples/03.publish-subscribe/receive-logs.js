const amqp = require('amqplib/callback_api');

amqp.connect('amqp://guest:guest@192.168.1.41', (err, connect) => {
    if (err) {
        throw err;
    }

    connect.createChannel((err, channel) => {
        if (err) {
            throw err;
        }
        let exchange = 'logs';
        channel.assertExchange(exchange, 'fanout', {
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
                console.log('[*] Waiting for messages in ', q.queue);
                channel.bindQueue(q.queue, exchange, '');

                channel.consume(
                    q.queue,
                    msg => {
                        if (msg.content) {
                            console.log('[x] ', msg.content.toString());
                        }
                    }, {
                        noAck: true,
                    }
                );
            }
        );
    });
});