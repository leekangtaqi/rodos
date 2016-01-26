import express = require('express');

export function index(router){
    router.get('/posts', (req, res)=>{
        res.write('hello world;');
        res.end();
    })
    return router;
}