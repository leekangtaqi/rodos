import UserModelBuilder = require('./User');
import context = require('../../../context/context');

export var User = UserModelBuilder(context.domainBuilder.main);