/// <reference path="../../../typings/tsd.d.ts" />

import mongoose = require('mongoose');
const SchemaPlugin = require('./SchemaPlugin').SchemaPlugin;
const Schema = mongoose.Schema;

export = class SchemaBuilder{
    private name: string;
    private options: any[];
    private properties: any[];
    private usePlugins: any[];
    
    static BaseOptions = {
        strict: true,
        toJSON: { getter: true, virtuals: true },
        toObject: { getter: true, virtuals: true }    
    };
    static BasicPlugins = [];
    static plugins = {};
    static plug(plugin, basicPlugin: boolean){
        plugin.register(SchemaBuilder);
        if(basicPlugin){
            SchemaBuilder.BasicPlugins.push(plugin);
        }
    };
    
    constructor(name: string){
        this.name = name;
        this.options = [];
        this.properties = [];
        this.usePlugins = [];
    };
    
    public i(name: string){
        return new SchemaBuilder(name);
    };
    public withBasicOptions(){
        Object.assign(this.options, SchemaBuilder.BaseOptions);
        return this;
    };
    public withBasicProperties(){
        SchemaBuilder.BasicPlugins.forEach((plugin, index)=>{
            this.usePlugins[plugin.prop] = null;
        }, this);
        return this;
    };
    public withBasis(){
        this.withBasicOptions();
        this.withBasicProperties();
        return this;
    };
    public build(){};
}