var express = require('express');
var app = express();
var http= require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req,res){
	res.sendFile(__dirname + '/public/index.html');

});

io.on('connection', function(socket){
	console.log('El profe esta enojado');
	socket.on('chat', function(_msg){
		//console.log(_msg);
		io.emit('nuevo_mensaje',_msg);
	});
});


http.listen(process.env.PORT, function () {
  console.log('Express run on port 8080');
});
