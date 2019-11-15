var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = 3000;

server.listen(
    port, 
    function() 
    {
        console.log('Server listening at port %d', port);
    }
);

app.use(express.static(path.join(__dirname, '/../client')));

console.log("Server Begin");

io.on(
    'connection',
    function(socket)
    {
        console.log("init msg sent");
        io.emit('can-msg', "hello");
    }
)

setInterval(
    function(){
        io.emit('can-msg', "sleep");
    },
    1000
)

