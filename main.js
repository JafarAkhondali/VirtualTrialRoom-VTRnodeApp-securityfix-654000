var express = require("express");
var app     = express();
var path    = require("path");


app.use('/',express.static(__dirname + '/public'));
app.use('/',express.static(__dirname + 'CSS'));
app.listen(3000, function(){console.log('Listening at Port 3000')});



