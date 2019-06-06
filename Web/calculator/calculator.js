const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Urlencoded is used specifically for reading info submitted via an HTML form
// Extended allows us to post 
app.use(bodyParser.urlencoded({extended: true}));

// Send the html page to the server
// __dirname represents the current directory
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    
    res.send("The result of the calculation is " + result);
})

app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = (weight / (height * height)).toFixed(2);

    res.send("Your BMI is " + result);
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});