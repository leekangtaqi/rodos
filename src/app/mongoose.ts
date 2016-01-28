import settings = require('../settings');
var mongoose = require('mongoose');
var logger = require('./logging').logger;

var makeUrl = (mongo)=>{
    const authPart = mongo.username + ':' + mongo.password + '@';
    const auth = mongo.username ? authPart : '';
    return 'mongodb://' + auth + mongo.host + ':' + mongo.port + '/' + mongo.db;
};

var url = makeUrl(settings);
var options = {};

mongoose.connect(url, options, (err)=>{
    logger.info('Mongoose is connected to ' + url);
});
mongoose.connection.on('error', (err)=>{
    logger.error('Mongoose error happens:' + err);
});

exports = mongoose;

