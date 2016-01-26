import express = require('express');

export function index(app){
    app.use('/', require('./spa').index())
}