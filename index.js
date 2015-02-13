var express = require('express');
var app = express();
var fs = require('fs');
var package = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
var version=package.version;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Bonjour Camille Colette Paule Millet \n je vous aime plus que tout et je suis super content de vous pacser !  ('+version+')');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
