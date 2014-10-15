var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/engine', function (req, res) {
    res.send("The game beins . . .")
});

// Not Found handler
app.use(function (req, res, next) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write("<h2>The requested resource is not available.</h2>");
    res.write("Request received on port " + process.env.PORT + "<br>");
    res.write("Request URL: " + req.url + "<br>");
    res.end('[iisnode version is ' + process.env.IISNODE_VERSION + ', node version is ' + process.version + ']');
});

io.on('connection', function(socket){
    console.log('A user connected');
    socket.on('disconnect', function () {
        console.log('A user disconnected.');
    });
    socket.on('chat message', function (msg) {
        socket.broadcast.emit('chat message', msg)
    });
});

var server = http.listen(process.env.PORT, function() {
    console.log("Listening on port %s", server.address().port);
});