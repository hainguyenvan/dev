const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const Config = require('./config/config');

const port = Config.PORT_SEVER;
const app = express();

app.use(cors(), bodyParser.json());

// import router
const rootRouter = require('./routes/root');
app.use('/api', rootRouter);

app.listen(
    port, () => console.info(
        `Server started on port ${port}`
    )
);