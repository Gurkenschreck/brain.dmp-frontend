/**
 * This backend node express server provides mock data.
 */
'use strict';

console.log('Starting brain.dmp backend mock node server.');

var express = require('express');
var app     = express();

var port = process.env.BACKEND_PORT || 4713;

var mockData = require('./server-mockdata');

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
app.get('/*', function(req, res) {
    res.send('Good pipe!');
});

// Start
app.listen(port, function() {
    console.log('Backend mock: Listening on port ' + port);
});