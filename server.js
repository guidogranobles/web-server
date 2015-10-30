var express = require('express');
var middleware = require('./middleware.js');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){

	res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){

	console.log('Server started!. Listening in port: ' + PORT);
});