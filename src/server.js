/**
 * The frontend is provided by a node express server.
 * It serves the files (html, js, images, etc) and 
 * redirects the calls to the configured backend.
 */
'use strict';

console.log('Starting brain.dmp frontend node server.');
var express = require('express');
var app     = express();

var port = process.env.PORT || 4712;
var apiBaseUri = process.env.APIBASEURI || 'http://localhost:'+port;

// Send headers
/**
 * Intercept calls and append header.
 */
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

// API SECTION
/**
 * Manage (redirect) frontend calls to api.
 */
app.get('/api/v1', function(req, res) {
    res.send('Simple Server!');
});


// SERVE WEBSERVER CONTENT
// Serve content from public/static under /static
app.use('/static', express.static('public/static'));

// Serve index.html
app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


// Start
app.listen(port, function() {
    console.log('Listening on port ' + port);
});