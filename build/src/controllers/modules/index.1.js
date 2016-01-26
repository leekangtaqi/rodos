function index(app) {
    app.get('/', (req, res, next) => {
        res.write('ok');
    });
}
exports.index = index;
//# sourceMappingURL=index.1.js.map