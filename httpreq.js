var http = require('http');
var message = "Here's looking at you, kid.";
var options = {
  host:'192.168.99.100', port : 49160, path:'/',method:'GET'
}
var request = http.request(options,function(response){
  response.on('data',function(data){
    console.log(data);
  })
});
request.write(message);
request.end();
