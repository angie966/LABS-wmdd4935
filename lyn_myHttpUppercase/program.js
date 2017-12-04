let http = require('http');

let fs   = require('fs');

let map  = require('through2-map');

let portNumber = process.argv[2];

let server = http.createServer(function(request, response) {

    console.log(request.body);

    request.pipe(map(function (chunk) {

        return chunk.toString().toUpperCase();

    })).pipe(response);

    
});


server.listen(portNumber);