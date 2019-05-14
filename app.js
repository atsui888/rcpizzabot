var express = require("express");
var app = express();

app.get("/",function(req,res) {
    res.send('<h1>This is my web app');
});

var listener =
app.listen(process.env.PORT,process.env.IP,function() {
    console.log("server has started");
    console.log('Listening on port ' +
listener.address().port);
});