/**
 *  * Created by ctote on 5/17/2017.
 *   */
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/'));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/devotions.html'));
})

app.listen(port, function () {
    console.log('Duki.space listening on port ' + port);
})

