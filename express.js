var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

app.get('/', function (req, res) {
  res.end("hide");
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'which pokemon do you need' });
  socket.on('my other event', function (data) {
    P.getPokemonByName(data) // with Promise
   .then(function(response) {
     console.log(response);
       socket.emit('pokemondata', response);
   })
   .catch(function(error) {
     console.log('There was an ERROR: ', error);
   });
    console.log(data);
  });
});
