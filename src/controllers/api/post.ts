import express = require('express');

export function index(router){
    router.get('/posts', (req, res)=>{
        res.write('hello world;');
        res.end();
    })
    return router;
}
function log(t, p, d){
    
}
// @Controller
// class PostController{
//     @route({path: '/_:id', method: 'post'})
//     @log
//     getUserById(id){
//         //get user from db
//         this.body = user;
//     }
    
    
// }