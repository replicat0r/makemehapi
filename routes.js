'use strict'

const Hapi = require('hapi');
const server = new Hapi.Server();


server.connection({
	port: Number(process.argv[2] || 8000)
});

server.route({
	method: 'GET',
	path: '/{name}',
	handler: function(req,reply){
		reply(`Hello ${req.params.name}`)
	}
})


server.start(function(){
	console.log('Server Running')
});