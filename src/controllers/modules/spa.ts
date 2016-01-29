import express = require('express');
import context = require('../../context/context');
var userService = context.services.user;
var router = express.Router();

export function index(){
    router.get('/', async (req, res, next)=>{
        var user = await userService.createAsync({name: '11'});
        res.render('index', {username: 'zhangsan11'});
    });
    return router;
}