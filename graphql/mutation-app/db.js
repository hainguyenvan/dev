var { DataStore } = require('notarealdb');

var store = new DataStore('./data');

module.exports = {
    students: store.collection('students'),
    colleges: store.collection('colleges')
}