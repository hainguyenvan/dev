const validate = require('express-validation');
const Joi = require('joi');

var chatBot = require('../controller/chat-bot');

module.exports = function (router) {

    router.route("/chat-bot/training").post(validate({
        body: {
            q: Joi.string().required(),
            a: Joi.string().required()
        }
    }), chatBot.training);

    router.route("/chat-bot/getAnswer").post(validate({
        body: {
            q: Joi.string().required(),
        }
    }), chatBot.getAnswer);


}