var db = require('./db');

const Query = {
    greeting: () => {
        return 'Test Success, GraphQL server is up & running !!';
    },
    students: () => {
        return db.students.list();
    },

    studentByID: (root, args, context, info) => {
        console.log('root: ', root);
        console.log('context: ', context);
        console.log('info: ', info);
        console.log('args: ', args);
        return db.students.get(args.id);
    }
}
module.exports = { Query }