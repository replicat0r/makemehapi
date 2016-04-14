'use strict'
const Hapi = require('hapi');
const inert = require('inert');

const server = new Hapi.Server();
var serverOptions = {
	port: Number(process.argv[2]) || 8000
}
server.connection(serverOptions);

server.register(inert, function(err) {
	if (err)
		throw err;
})

server.route({
	method: "get",
	path: '/',
	handler: {
		file: './views/hello.html'
	}

})

server.start(() => {
	console.log('started')
})