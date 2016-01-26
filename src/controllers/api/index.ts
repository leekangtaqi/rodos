import express = require('express');

export function index(app){
    app.use('/api', [
        require('./post').index(express.Router()),
    ])
}
