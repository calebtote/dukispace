/**
 *  * Created by ctote on 5/17/2017.
 *   */
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/devotions.html'));
})

app.listen(3000, function () {
    console.log('Duki.space listening on port 3000!')
})

