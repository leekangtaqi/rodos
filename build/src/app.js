"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var dispatcher = require('./router');
var swig = require('swig');
var path = require('path');
var serverStatic = require('serve-static');
var app = express();
app.set('views', __dirname + '/views');
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
app.listen(3000, function () {
    console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
});
//# sourceMappingURL=app.js.map