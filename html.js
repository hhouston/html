var http = require('http');

var options = {
  host: 'google.com',
  port: 801111111111180,
  path: '/foo.html'
};

http.get(options, function(resp){
  resp.on('data', function(chunk){
	console.log(resp);
    //do something with chunk
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});
