/*
CaseNode main index 
Copyright (c) 2015 Oliver Low
app.ts (typescript - compiled to app.js)
VERSION: 0.1.1
Revision history:
v0.1.1 2015-09-03 inception
*/

import express = require('express');
import routes = require('./routes/index');
import http = require('http');
import path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

import stylus = require('stylus');
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

/**************
* ROUTERS
***************/
//General routes
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);

//user pages
app.get('/user', routes.user);
app.get('/user/*', routes.user);

//document generator - generally needs some POST data to do stuff, GET is for testing
app.get('/docgen', routes.docgen);
app.post('/docgen', routes.docgen);


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
