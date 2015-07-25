var http = require('http');
var url = process.argv[2];
var bl = require('bl');

http.get(url, function(request) {
  request.pipe(bl(function (err, data) {
    if (err) {
      console.log(err);
    }
    var content = data.toString();
    console.log(content.length);
    console.log(content);
  }));
});
