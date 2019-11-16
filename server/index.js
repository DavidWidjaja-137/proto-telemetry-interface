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

io.on(
    'connection',
    function(socket)
    {
        console.log("Initial Message Sent");
        io.emit('introduction');
    }
)

setInterval(
    function(){
        var data = generateData();
        io.emit('battery-temp-msg', data);
    },
    1000
)

function generateData()
{
    var data = 
    {
        "msg-id": 0x627,
        "msg-source": "bms",
        "timestamp": new Date().getTime(),
        "data": 
            {
                "ave-batt-temp": Math.floor(Math.random() * 100),
                "max-batt-temp":  Math.floor(Math.random() * 100),
                "min-batt-temp":  Math.floor(Math.random() * 100),
            }
    }

    return data;
}

