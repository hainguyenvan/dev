var express = require('express');
var router = express.Router();

// root
router.get('/', function (req, res) {
    res.json({
        msg: 'Welcome to our api !'
    });
});

module.exports = router;