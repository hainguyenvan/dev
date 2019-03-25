var UserModel = require('./models/user');
var PostModel = require('./models/post');

var db = require('./db');

const Post = {
    user(root) {
        return db.users.get(root.userID);
    }
}

const User = {
    fullName(root) {
        return root.firstName + ':' + root.lastName;
    }
}

const Query = {
    greeting() {
        return 'Test Success, GraphQL server is up & running !!';
    },

    users() {
        return UserModel.getAll();
    },

    posts(root, args, context, info) {
        return db.posts.list();
    }
}

const Mutation = {
    async createUser(root, args, context, info) {
        let createUser = {
            firstName: args.firstName,
            lastName: args.lastName,
            age: args.age
        }
        let insertResult = await UserModel.insert(createUser);
        return insertResult;
    }
}


module.exports = {
    Query,
    Mutation,
    Post,
    User
}