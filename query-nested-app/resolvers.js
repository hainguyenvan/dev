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
    },

    sayHello: (root, args, context, info) => {
        return `Hi ${args.name} GraphQL server says Hello to you!!`;
    }
}

const Student = {
    fullName: (root, args, context, info) => {
        return root.firstName + ':' + root.lastName;
    },
    college: (root) => {
        return db.colleges.get(root.collegeId);
    }
}

module.exports = {
    Query,
    Student
}