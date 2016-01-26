/// <reference path="../typings/tsd.d.ts" />
"use strict";
import express = require('express');
import bodyParser = require('body-parser');
import methodOverride = require('method-override');
import errorHandler = require('errorhandler');
import dispatcher = require('./router');
import swig = require('swig');
import path = require('path');
import serverStatic = require('serve-static');

var app = express();
app.set('views', path.join( __dirname, '../../src/views'));
app.set('view engine', 'html');
app.set('view options', { layout: false });
app.engine('html', swig.renderFile);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use('/public', serverStatic((path.join(__dirname + '../../../public'))));
app.use('/web', serverStatic((path.join(__dirname + '../../../web'))));

dispatcher.dispatch(app); 

var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    app.use(errorHandler());
}
app.listen(3000, function(){
    console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
});

