var express = require('express');
var router = express.Router();
function index() {
    router.get('/', (req, res, next) => {
        res.render('index', { username: 'zhangsan11' });
    });
    return router;
}
exports.index = index;
