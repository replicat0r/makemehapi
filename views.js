'use strict';

const Path = require('path')
const Hapi = require('hapi');

const server = new Hapi.Server();
server.register(require('vision'), (err) => {
	if (err) throw err;

})

server.connection({
	host: "localhost",
	port: Number(process.argv[2]) || 8000
})

server.views({
	engines: {
		html: require('handlebars')
	},
	path: Path.join(__dirname, 'templates')
})

server.route({
	method: 'GET',
	path: '/',
	handler: (request, reply) => {
		reply.view('index' ,{name: request.query.name})
	}

})


server.start((err) => {
	if (err)
		throw err;
	console.log('started Server')
})