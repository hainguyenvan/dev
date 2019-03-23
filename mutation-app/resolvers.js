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

const Mutation = {
    createStudent: (root, args, context, info) => {
        return db.students.create({
            collegeId: args.collegeId,
            firstName: args.firstName,
            lastName: args.lastName
        });
    }
}

module.exports = {
    Query,
    Student,
    Mutation
}