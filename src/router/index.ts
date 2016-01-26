"use strict";
import express = require("express")
import controllers = require('../controllers');

export function dispatch(app) {
   //TODO
   controllers.index(app);
};