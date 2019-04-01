var db = require('./db');

const Post = {
    user: (root) => {
        return db.users.get(root.userID);
    }
}

const Query = {
    greeting: () => {
        return 'Test Success, GraphQL server is up & running !!';
    },
    users: () => {
        return db.users.list();
    },

    posts: (root, args, context, info) => {
        return db.posts.list();
    }
}

const Mutation = {
    createUser: (root, args, context, info) => {
        db.users.create({
            id: args.id,
            firstName: args.firstName,
            lastName: args.lastName,
            age: args.age
        });
        return db.users.get(args.id);
    }
}


module.exports = {
    Query,
    Mutation,
    Post
}