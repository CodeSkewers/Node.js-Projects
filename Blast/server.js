//////////////////EXPRESS//////////////////

// server.js
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;

//Route app
var router = require('./app/routes');
  app.use('/', router);

app.set('view engine', 'ejs');
app.use(expressLayouts);
//Set static files (css, images, etc) location
app.use(express.static(__dirname + '/public'));


// start the server
app.listen(port, function() {
 console.log('app started');
});
