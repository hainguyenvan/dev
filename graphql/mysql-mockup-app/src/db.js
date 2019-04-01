var { DataStore } = require('notarealdb');

var DATA_FOLDER = require('path').resolve(__dirname, '../src/data');
var store = new DataStore(DATA_FOLDER);

module.exports = {
    users: store.collection('users'),
    posts: store.collection('posts')
}