var apiControllers = require('./api');
var modulesControllers = require('./modules');
function index(app) {
    apiControllers.index(app);
    modulesControllers.index(app);
}
exports.index = index;
//# sourceMappingURL=index.js.map