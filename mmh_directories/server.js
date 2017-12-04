'use strict';

let Hapi = require('hapi');

let server = Hapi.createServer('localhost', (process.argv[2] || 8080));

server.route({
    method: 'GET',
    
    path: '/foo/bar/baz/{path}',
    
    handler: { 

    directory: { path: './public' }
    }
});

server.start((err) => {
    if (err) throw err;
});