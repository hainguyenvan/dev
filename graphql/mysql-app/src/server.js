const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const GraphqlSchema = require('./graphql-schema');

const port = process.env.PORT || 9000;
const app = express();

app.use(cors(), bodyParser.json());

const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: GraphqlSchema,
}));
// app.use('/graphql', graphqlExpress({ GraphqlSchema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(
    port, () => console.info(
        `Server started on port ${port}`
    )
);