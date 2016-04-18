(function () {

    "use strict";

    //var fnf = require(__dirname + '/../files-and-folders-server/index.js');
    var fnf = require('files-and-folders-server');
    var open = require('open');

    var port = 3002;
    
    console.info('app / __dirname :', __dirname);
    fnf.start({
        // auth: require('./demo.auth.js'), // optional
        //clientRoot: __dirname + '/../files-and-folders-client/release',
        clientRoot: __dirname + '/node_modules/files-and-folders-client/release',
        port: port
    });

    var url = 'http://localhost:' + port + '/';
    open(url);

})();