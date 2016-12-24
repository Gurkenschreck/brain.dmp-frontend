'use strict';

var express = require('express');
var app     = express();

app.use('/static', express.static('public/static'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/v1/', function(req, res) {
    res.send('Simple Server!');
});


var port = 4712;
app.listen(port, function() {
    console.log('Listening on port ' + port);
});