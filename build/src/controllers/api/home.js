function index(router) {
    router.get('/', (req, res) => {
        res.write('hello world;');
        res.end();
    });
    return router;
}
exports.index = index;
//# sourceMappingURL=home.js.map