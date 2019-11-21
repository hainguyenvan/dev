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
        let msg = process.argv.slice(2).join(' ') || 'Hello world!';

        channel.assertExchange(exchange, 'fanout', {
            durable: false,
        });

        // send message to queue
        channel.publish(exchange, '', Buffer.from(msg));
        console.log('[x] Sent ', msg);
    });

    // exit
    setTimeout(() => {
        connect.close();
        process.exit(0);
    }, 500);
});