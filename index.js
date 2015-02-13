var express = require('express');
var app = express();
var fs = require('fs');
var package = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
var version=package.version;

var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(message){
    console.log(message);
});

jeu.emit('gameover', 'Vous avez perdu !');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Bonjour Camille Colette Paule Millet \ je vous aime plus que tout et je suis super content de vous pacser ! \ Liste des noms de trucs a faire avant quon decede  ('+version+')');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
