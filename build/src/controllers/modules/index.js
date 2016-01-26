var express = require('express');
function index(app) {
    app.use('/', require('./spa').index(express.Router()));
}
exports.index = index;
//# sourceMappingURL=index.js.map