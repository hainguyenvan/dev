const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
app.use(cookieParser());

console.log("express demo cookies ...");
app.get('/', function(req, res){
    res.cookie('name', 'express');
    //Expires after 360000 ms from the time it is set.
    // res.cookie(name, 'value', {expire: 360000 + Date.now()}); 
    //This cookie also expires after 20000 ms from the time it is set.
    res.cookie('name1', 'express1',{maxAge: 10000})
    res.send('cookie set !');
});

app.get('/cookies', function(req, res){
    console.log('Cookies: ', req.cookies);
    res.send('cookies: ');
})

app.listen(3000);