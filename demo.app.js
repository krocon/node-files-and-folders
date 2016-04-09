(function () {

    "use strict";

    var fnf = require('files-and-folders-server');
    console.info('app / __dirname :', __dirname);
    fnf.start({
        // auth: require('./demo.auth.js'), // optional
        clientRoot: __dirname + '/node_modules/files-and-folders-client/release',
        port:3002
    });

})();