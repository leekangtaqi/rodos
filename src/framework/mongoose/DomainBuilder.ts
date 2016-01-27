import DomainBuilder = require('./SchemaBuilder');
 
DomainBuilder.plug(require('./CreateOn').CreateOn, true);

export = DomainBuilder;