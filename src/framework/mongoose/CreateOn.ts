"use strict";
import SchemaPlugin  = require('./SchemaPlugin');

class CreateOn extends SchemaPlugin{
    name: string;
    prop: string;
    type: any;
    
    constructor(o: SchemaPlugin){
        super(o);
    };
    use(schema, options){
        var path = {};
        path[this.prop] = this.type;
        schema.add(path);
        schema.pre('save', (next)=>{
            this['autoCreatedOn'].call(this);
            next();
        });
        const prop = this.prop; 
        schema.method('autoCreatedOn', (time?: Date)=>{
            !time && (time = new Date()); 
            return this[prop] = time;
        });    
    }
}
export = new CreateOn({
    name: 'createOn',
    prop: 'crtOn',
    type: { 
        type: Date    
    }
}); 