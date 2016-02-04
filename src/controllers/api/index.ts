"use strict";
import express = require('express');
import userController = require('./user');
export function index(app){
    app.use('/api', [
        require('./user').index(),
    ])
    @Controller
    class UserController{
        @route({path: '/', method: 'get'})
        @interceptor(middleware)
        @log
        getUserById(id){
            console.log(id);
        }    
    }
    function route(o: {path: string, method: string}){
        return function(t, p, d){
            console.error(t);
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
        console.log(t)
    }
}
