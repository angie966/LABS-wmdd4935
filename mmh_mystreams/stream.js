let server = new (require('hapi').Server)()

let vision = require('vision')

let fs = require('fs')

let path = require('path')

let rot13 = require('rot13-transform')

server.connection({

  host: 'localhost',
  
  port: Number(process.argv[2] || 8080)

  
})

server.route({
  
  path: '/',
  
  method:'GET',
  
  handler: read_rot13_file

  
})

server.start(function() {
  
  console.log('Server running at:', server.info.uri)
})


function read_rot13_file(request, reply) {
  
  let filename = path.join(__dirname, 'happiness.txt')
  
  reply(fs.createReadStream(filename).pipe(rot13()))
}