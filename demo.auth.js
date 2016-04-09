(function () {

    var auth = require('./fnf-server/node_modules/basic-auth/index.js');

    var admins = {
        'admin': {password: 'admin'}
    };

    module.exports = function (req, res, next) {
        var user = auth(req);
        if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
            res.set('WWW-Authenticate', 'Basic realm="example"');
            return res.status(401).send();
        }
        return next();
    };

})();