function index(router) {
    router.get('/', (req, res, next) => {
        res.render('index', { username: 'zhangsan11' });
    });
    return router;
}
exports.index = index;
//# sourceMappingURL=spa.js.map