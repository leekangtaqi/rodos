import express = require('express');
import context = require('../../context/context');

var router = express.Router();
export function index(){
    router.get('/', (req, res, next)=>{
        res.render('index', {username: 'zhangsan11'});
    })
    return router;
}