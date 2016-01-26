var express = require('express');
function index(app) {
    app.use('/api', [
        require('./post').index(express.Router()),
    ]);
}
exports.index = index;
