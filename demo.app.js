(function () {

    "use strict";

    var fnf = require(__dirname + '/../files-and-folders-server/index.js');
    console.info('app / __dirname :', __dirname);
    fnf.start({
        // auth: require('./demo.auth.js'), // optional
        clientRoot: __dirname + '/../files-and-folders-client/release',
        port:3002
    });

})();