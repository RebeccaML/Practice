const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
    
app.post("/", function(req, res) {
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var amount = Number(req.body.amount);
    var baseURL = "https://apiv2.bitcoinaverage.com/convert/global";
    var options = {
        url: baseURL,
        method: "GET", //this is the default
        qs: { //values to append to the URL
            from: crypto,
            to: fiat,
            amount: amount,
        }
    };

    request(options, function(error, response, body) {
        var data = JSON.parse(body);
        var price = data.price;
        var currentDate = data.time;
        // Enter all the things that should be displayed and then res.send() to send them all at once
        res.write("<p>The current date is " + currentDate + "</p>");
        res.write("<h1>The current price of " + amount + " " + crypto + " is " + price + " " + fiat + "</h1>");
        res.send();
    });
});
 
app.listen(3000, function() {
    console.log("It's working guys!");
});