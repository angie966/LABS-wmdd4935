let server = new (require('hapi').Server)()

let vision = require('vision')

let path = require('path')

      server.connection({

          host: 'localhost',
  
          port: Number(process.argv[2] || 8080)

  
        })

      server.register(vision, function (err) {
  
      if (err) throw err


      })

      server.views({
  
        engines: {
  
          html: require('handlebars')
        },
    
        path: path.join(__dirname, 'templates')

  
        })

    server.route({
  
      path: '/',
  
      method:'GET',
  
      handler: {
  
      view: 'index.html'
  
    
      }
    })

    server.start(function() {
  
      console.log('Server running at:', server.info.uri)

  
      } )