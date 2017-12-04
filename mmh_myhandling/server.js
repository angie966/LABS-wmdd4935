'use strict';

let Hapi = require('hapi');

let server = Hapi.createServer('localhost', process.argv[2] || 8080);

server.route({
   
    method: 'GET',
   
    path: '/',
   
    handler: { 
   
        file: 'index.html' 
    }
});

server.start((err) => {
   
    if (err) throw err;
});