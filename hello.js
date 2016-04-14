'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const serverOptions = {
	host: 'localhost',
	port: Number(process.argv[2] || 8000)
}
server.connection(serverOptions)


server.route({
	method: 'GET',
	path: "/",
	handler: function(req,reply){
		reply('Hello hapi')
	}
})



server.start(function(){
	console.log('Server running at:' , server.info.uri)
})