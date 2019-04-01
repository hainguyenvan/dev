//Include speakeasy into your node file.
var express = require('express')
var speakeasy = require("speakeasy");
var QRCode = require('qrcode');
var bodyParser = require('body-parser')

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


var secret = speakeasy.generateSecret({ length: 30 });
app.get('/', function (req, res) {
    console.log('secret.base32 : ' + secret.base32);
    //using speakeasy generate one time token.
    var token = speakeasy.totp({
        secret: secret.base32,
        encoding: 'base32',
    });
    console.log('token : ' + token);
    QRCode.toDataURL(secret.otpauth_url, function (err, data_url) {
        //console.log(data_url);

        // Display this data URL to the user in an <img> tag 
        // Example: 
        res.end('<!DOCTYPE html>\
        <html lang="en">\
        <head>\
            <meta charset="UTF-8">\
            <meta name="viewport" content="width=device-width, initial-scale=1.0">\
            <meta http-equiv="X-UA-Compatible" content="ie=edge">\
            <title>2FA example</title>\
        </head>\
        <body>\
            <img src="'+ data_url + '" alt="Mountain View">\
            <div class="col-lg-2 col-sm-3 col-xs-6"> OTP : '+ token + ' </div>\
        </body>\
        </html>');
    });
});

//Verify OTP
app.post('/verify', function (req, res) {
    console.log('token: ', req.body.token);
    var token = req.body.token; // for testing I am just sending token to front-end. send this token with /verify POST request
    // Verify a given token 
    var tokenValidates = speakeasy.totp.verify({
        secret: secret.base32,
        encoding: 'base32',
        token: token,  //token is what created in get('/') request
        window: 1
    });
    console.log('token current: ', tokenValidates);
    res.send(JSON.stringify({ status: tokenValidates }));
});

app.listen(8082);
console.log('server running on port 8082');