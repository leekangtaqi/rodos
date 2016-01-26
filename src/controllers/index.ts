var apiControllers = require('./api');
var modulesControllers = require('./modules');
export function index(app){
    apiControllers.index(app);
    modulesControllers.index(app);
}