var datum = require('datumbox').factory("30ca946b7d0e7579a40d8dc6e063ef06");
var express = require('express');
var app = express();
var isSpam = require("spam-detector");
var port = process.env.PORT || 3000;
app.get("/url/:url", (req, res) => {
    var url = req.params.url;
    if (!(url.includes("http"))) {
        url = "https://www." + url;

    }

    isSpam(url, function(err, data) {
        if (data) {
            res.send("OK");
        } else {
            res.send("SUSCiPIOUS LINK")
        }
        // res.send(data);
    });

})
app.get("/", (req, res) => {
    res.send("Helllo");
})


app.get("/text/:text", (req, res) => {
    var str = req.params.text;
    datum.spamDetection(str, function(err, data) {
        if (err)
            return console.log(err);

        console.log(data);
        res.send(data); // Remarks here.
    });
})


app.listen(port, () => {
    console.log("Connected successful" + port);
})