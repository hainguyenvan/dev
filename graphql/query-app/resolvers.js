var db = require('./db');

const Query = {
    greeting: () => {
        return 'Test Success, GraphQL server is up & running !!';
    },
    students: () => {
        return db.students.list();
    },

    studentByID: (root, args, context, info) => {
        return db.students.get(args.id);
    }
}

const Student = {
    fullName: (root, args, context, info) => {
        return root.firstName + ':' + root.lastName;
    }
}

module.exports = { Query, Student }