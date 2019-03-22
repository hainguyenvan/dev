var db = require('./db');

const Query = {
    greeting: () => {
        return 'Test Success, GraphQL server is up & running !!';
    },
    students: () => {
        return db.students.list();
    }
}
module.exports = { Query }