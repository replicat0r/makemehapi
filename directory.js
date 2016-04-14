'use strict';
const Path = require('path')
const Hapi = require('hapi');
const inert = require('inert')
const server = new Hapi.Server();
server.connection({
	host:"localhost",
	port: Number(process.argv[2]) || 8000

})

server.register(inert, (err) => {
	if (err)
		throw err;
})



server.route({
	method: 'GET',
	path: '/foo/bar/baz/{filename}',
	handler: {
		directory: {
			path: 'public'
		}
	}
});
server.start((err) => {
	if (err)
		throw err;
	console.log('Server Started')
})