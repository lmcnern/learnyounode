var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
  res.setEncoding('utf-8');
  res.on('error', function(err) {
    console.log(err);
  });
res.on('data', function(data) {
  console.log(data);
  });
});
