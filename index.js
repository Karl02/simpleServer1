var net = require('net');
var mySocket;



//Appended Code
/*var express = require('express');
var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(_dirname + '/public'));

app.get('/', function(request, response){
	response.send(cool())

});

app.listen(app.get('port'), function(){
	console.log("Node app is running at localhost:" + app.get('port'));
})*/

//Appended Code end

//create the server register event listeners
var server = net.createServer(function(socket){

	mySocket = socket;
	mySocket.on("connect",onConnect);
	mySocket.on("data", onData);


});

function onConnect(){
	console.log("Connected to Flash");
}



//When flash sends us data, this method will handle it

function onData(d){
	if(d == "exit\0"){
		console.log("exit");
		mySocket.end();
		server.close();
	}
	else
	{
		console.log("From Flash = " + d);
		mySocket.write(d,'utf8');
	}
}

//listen for connections
server.listen(9001,"127.0.0.1");
