const fs = require('fs');
const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require("lodash");

// get path folder of schemas
const ROOT_DIR = require('path').resolve(__dirname, '../src/schemas');

// index
const indexSchemaFile = ROOT_DIR + '/index.graphql';
const indexTypeDefs = fs.readFileSync(indexSchemaFile, { encoding: 'utf-8' });
const indexResolvers = require('./resolvers/index');

// user
const userSchemaFile = ROOT_DIR + '/user.graphql';
const userTypeDefs = fs.readFileSync(userSchemaFile, { encoding: 'utf-8' });
const userResolvers = require('./resolvers/user');

// post
const postSchemaFile = ROOT_DIR + '/post.graphql';
const postTypeDefs = fs.readFileSync(postSchemaFile, { encoding: 'utf-8' });
const postResolvers = require('./resolvers/post');





// create type defs
const typeDefs = [
    indexTypeDefs,
    userTypeDefs,
    postTypeDefs
];

// create resolvers
const resolves = merge(
    indexResolvers,
    userResolvers,
    postResolvers
);


const GrapQLSchema = makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolves });
module.exports = GrapQLSchema;