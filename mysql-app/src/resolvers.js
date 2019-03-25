var UserModel = require('./models/user');
var PostModel = require('./models/post');

var db = require('./db');

const Post = {
    user(root) {
        return UserModel.getByID(root.userID);
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

    posts() {
        return PostModel.getAll();
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
    },

    async createPost(root, args, context, info) {
        let insertData = await PostModel.insert(args);
        return insertData;
    }
}


module.exports = {
    Query,
    Mutation,
    Post,
    User
}