var fs = require('fs');
var filePath = process.argv[2];

var file = fs.readFileSync(filePath);

var content = file.toString();

console.log(content.split('\n').length - 1);

