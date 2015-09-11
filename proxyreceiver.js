var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(9014);

function handler (req, res) {
    res.writeHead(200);
    fs.readFile('index.html', function(err, data){
      res.end(data);
    })
    
}

io.on('connection', function (socket) {

  socket.emit('data', { message: 'Hello World!' });

  socket.on('resp', function(msg) {
    console.log('Got message: ', msg);
  });

});

