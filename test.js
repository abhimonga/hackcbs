var datum = require('datumbox').factory("30ca946b7d0e7579a40d8dc6e063ef06");
var express = require('express');
var app = express();
var isSpam = require("spam-detector");
var bodyParser = require('body-parser');
var sightengine = require('sightengine')('126487830', 'Py3hgxvT9hWHkWfery6s');
var port = process.env.PORT || 3000;



app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.static(__dirname + '/public'));




app.get("/url/:url", (req, res) => {
    var url = req.params.url;
    if (!(url.includes("http"))) {
        url = "https://www." + url;

    }

    isSpam(url, function (err, data) {
        if (!data) {
            res.send("OK");
        } else {
            res.send("SUSCiPIOUS LINK")
        }
        // res.send(data);
    });

})

app.post("/url",(req,res)=>{

    var url = req.body.url;
    if (!(url.includes("http"))) {
        url = "https://www." + url;

    }

    isSpam(url, function (err, data) {
        if (!data) {
            res.send("OK");
        } else {
            res.send("SUSCiPIOUS LINK")
        }
        
    });

});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})


app.post("/text", (req, res) => {
    console.log("detection started");
    datum.spamDetection(req.body.text, function (err, data) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(data);
    });


});


app.post("/image", (req, res) => {

    sightengine.check(['nudity', 'wad', 'offensive', 'scam']).set_url("").then(function (result) {
        console.log(result);
        res.json(result);

    }).catch(function (err) {
        res.json(err);
    });
   
})


function imageDetect(){

    

}

imageDetect();


app.listen(port, () => {
    console.log("Connected successful" + port);
})