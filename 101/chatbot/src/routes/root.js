var express = require('express');
var router = express.Router();

// root
router.get('/', function (req, res) {
    res.sendFile('public/index.html');

    // res.json({
    //     msg: 'Welcome to our api !'
    // });
});

//main tenance parent 
require('./chat-bot')(router);

module.exports = router;