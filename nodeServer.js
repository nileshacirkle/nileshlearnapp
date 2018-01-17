// var socket = require( 'socket.io' );
// var express = require( 'express' );
// var http = require( 'http' );

// var app = express();
// var server = http.createServer( app );

// var io = socket.listen( server );

// io.sockets.on( 'connection', function( client ) {
// 	console.log( "New client !" );

// 	client.on( 'message', function( data ) {
// 		console.log( 'Message received ' + data.name + ":" + data.message );

// 		// client.broadcast.emit( 'message', { name: data.name, message: data.message } );
// 		io.sockets.emit( 'message', { name: data.name, message: data.message } );
// 	});
// });

// server.listen( 8080 );


var http = require('http');

http.createServer(function (req, res) {
	console.log('successssss');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);