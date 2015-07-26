var http = require('http');
var concat = require('concat-stream');
var holder = [];
var count = 0;

for(var i = 0; i <(process.argv.length-2); i++) {
  (function (pos) {
    var path = process.argv[i+2];

    http.get(path, function(stream) {
      stream.setEncoding('utf8');
      stream.pipe(concat(function(data) {
        holder[pos] = data;
        count++;
        log();
      }));
    });
  }(i));
}

function log() {
  if(count === (process.argv.length -2)) {
    holder.forEach(function(data) {
      console.log(data);
    });
  }
};
