let server = new (require('hapi').Server)()

let joi = require('joi')


    server.connection({

        host: 'localhost',
  
        port: Number(process.argv[2] || 8080)

      })

    server.route({

        path: '/login',
  
        method:'POST',
  
        handler: function(request, reply) {
  
        reply('login successful')
        }
      ,
      config: {
  
      validate: {
  
      payload: joi.object({
  
        isGuest: joi.boolean(),

        username: joi.string().when('isGuest', { is: false, then: joi.required() }),

      password: joi.string().alphanum(),

        accessToken: joi.string().alphanum()

      })

      .options({allowUnknown: true})

      .without('password', 'accessToken')

    }
  }
})

server.start(function() {

  console.log('Server running at:', server.info.uri)

  
})