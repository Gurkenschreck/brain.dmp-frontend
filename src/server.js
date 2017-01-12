'use strict';

var express = require('express');
var app     = express();

// Send headers
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

// Serve content from public/static under /static
app.use('/static', express.static('public/static'));

// Serve index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// API SECTION
app.get('/api/v1/', function(req, res) {
    res.send('Simple Server!');
});


// Start
var port = 4712;
app.listen(port, function() {
    console.log('Listening on port ' + port);
});