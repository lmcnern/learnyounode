var net = require('net');

function base(i) {
  return (i < 10 ? '0' : '') + i;
}

function time() {
  var date = new Date();
  return date.getFullYear() + '-' + base(date.getMonth() + 1) + '-' +
  base(date.getDate()) + ' ' + base(date.getHours()) + ':' + base(date.getMinutes());
}

var server = net.createServer(function(socket) {
  socket.end(time() + '\n');
}).listen(Number(process.argv[2]));
