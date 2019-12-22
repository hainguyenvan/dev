const amqp = require("amqplib/callback_api");

amqp.connect("amqp://guest:guest@127.0.0.1", (err, connect) => {
  if (err) {
    throw err;
  }

  connect.createChannel((err, channel) => {
    if (err) {
      throw err;
    }

    let exchange = "tracking.system.router";
    let router = "locations.gps";
    let queue = "locations.gps.queue";

    channel.assertExchange(exchange, "direct", {
      durable: false
    });

    channel.assertQueue(
      queue,
      {
        exclusive: true
      },
      (err, q) => {
        if (err) {
          throw err;
        }
        console.log("[x] Waiting for logs.");

        // router info
        channel.bindQueue(q.queue, exchange, router);
        channel.consume(q.queue, msg => {
          console.log("[x] Msg: ", msg.content.toString());
          console.log("[x] Routing: ", msg.fields.routingKey);
        });
      },
      {
        noAck: true
      }
    );
  });
});
