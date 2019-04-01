const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

// get path root dir
const ROOT_DIR = require('path').resolve(__dirname, '../src/schemas');
// console.log('path: ', ROOT_DIR);

const port = process.env.PORT || 9000;
const app = express();

const fs = require('fs');
const schemaFile = ROOT_DIR + '/schema.graphql';
const typeDefs = fs.readFileSync(schemaFile, { encoding: 'utf-8' });
const resolvers = require('./resolvers');

const { makeExecutableSchema } = require('graphql-tools');
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(cors(), bodyParser.json());

const { graphiqlExpress, graphqlExpress } = require('apollo-server-express')
app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(
    port, () => console.info(
        `Server started on port ${port}`
    )
);