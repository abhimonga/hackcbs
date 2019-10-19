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
        if (!data) {
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


app.post("/text",(req,res)=>{
    datum.spamDetection(req.body.text, function(err, data) {
        if (err)
            {
                res.send(err);
                return;
            }
        res.send(data); 
    });


});



app.listen(port, () => {
    console.log("Connected successful" + port);
})