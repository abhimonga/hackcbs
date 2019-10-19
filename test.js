var datum = require('datumbox').factory("30ca946b7d0e7579a40d8dc6e063ef06");
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.get("/url/:url", (req, res) => {
    var url = req.params.url;
    res.send(url + "lol");
})
app.get("/", (req, res) => {
    res.send("Helllo");
})


app.listen(port, () => {
    console.log("Connected successful" + port);
})