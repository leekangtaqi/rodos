var express = require('express');
function index(app) {
    app.use('/api/home', [
        require('./post').index(express.Router()),
    ]);
}
exports.index = index;
//# sourceMappingURL=index.js.map