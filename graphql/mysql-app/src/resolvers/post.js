var UserModel = require('../models/user');
var PostModel = require('../models/post');

const Post = {
    user(root) {
        return UserModel.getByID(root.userID);
    }
}

const Query = {
    posts() {
        return PostModel.getAll();
    }
}

const Mutation = {
    async createPost(root, args, context, info) {
        let insertData = await PostModel.insert(args);
        return insertData;
    }
}


module.exports = {
    Query,
    Post,
    Mutation
}