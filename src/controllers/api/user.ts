"use strict";
@Controller
class UserController{
    @route({path: '/', method: 'get'})
    @interceptor(middleware)
    @log
    getUserById(id){
        console.log(id);
    }
    toString(){
        return '111';
    }    
}
function route(o: {path: string, method: string}){
    return function(t, p, d){
        
    }
}
function middleware(){
    
}
function interceptor(middleware){
    return function(t, p, d){
        
    }
}
function log(t, p, d){
    
}
function Controller(t){
    console.log('controller');
    console.log(t.toString())
}
export function index(){
    return require('express').Router()
};