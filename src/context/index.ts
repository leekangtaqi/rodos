import AllReady = require('../framework/allready/allready');
import DomainBuilder = require('../framework/mongoose/DomainBuilder');
import context = require('./context');
import redisMain = require('../app/redis');
import mongooseMain = require('../app/mongoose');
 
var ar: AllReady= new AllReady();
ar.add('redis', ar.redis(redisMain()));
ar.add('mongoose', ar.mongoose(mongooseMain));
 
context.mongoose.main = mongooseMain;
context.domainBuilder.main = DomainBuilder;
ar.ready(function(){
    require('../modules');
});

export = ar;