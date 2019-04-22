const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
app.use(cookieParser());
app.use(session({secret:"Shh, its a secret !"}));

app.get('/', function(req, res){
    if(req.session.pageViews) {
        req.session.pageViews ++;
        res.send('You visited this page '+req.session.pageViews);
    } else {
        req.session.pageViews = 1;
        res.send('Welcom to this page for the first time !');
    }
});

app.listen(3000);

console.log('express demo sessions ...');
