var express = require("express");
var app = express();

app.get("/game.html", function (req, res) {
    res.send("<HTML><BODY><H1>Treasure Island Welcomes you!</H1></BODY></HTML>");
});

var server = app.listen(3000, function() {
    console.log("Listening on port %d", server.address().port);
});