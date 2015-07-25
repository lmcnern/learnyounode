var fs = require('fs');
var fileName = process.argv[2];

fs.readFile(fileName, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    var contents = data.toString();
    console.log(contents.split('\n').length -1);
  }
});
