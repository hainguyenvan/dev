var UserModel = require('../models/user');

const User = {
    fullName(root) {
        return root.firstName + ':' + root.lastName;
    }
}

const Query = {
    users() {
        return UserModel.getAll();
    },
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
    User
}