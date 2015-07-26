var http = require('http');
var map = require('through2-map');

http.createServer(function(request, response) {
  request.pipe(map(function(data) {
    return data.toString().toUpperCase();
  }))
         .pipe(response);
}).listen(process.argv[2]);
