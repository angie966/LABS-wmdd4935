let fs = require('fs');

let http = require('http');

let port = process.argv[2];

let file = process.argv[3];

http.createServer((req, res) => {

  res.writeHead(200, { 'content-type' : 'text/plain' });

  fs.createReadStream(file).pipe(res);

  
}).listen(port);