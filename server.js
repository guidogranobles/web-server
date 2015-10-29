var express = require('express');
var app = express();

var PORT = 3000;

var middleware = {

	requireAuthentication: function(req, res, next){

		console.log('Private route hit!');
		next();
	},
	logger: function(req, res, next){
		console.log('Request: ' + req.method + req.originalUrl +  '  ' + (new Date().toString()));
		next();
	}
}

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){

	res.send('About us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){

	console.log('Server started!. Listening in port: ' + PORT);
});