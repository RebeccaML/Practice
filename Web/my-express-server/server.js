const express = require("express");

const app = express();

// What should happen when a browser tries to access the server (makes a GET request)
// The "/" indicates the home root
// I can specify what I want for the function parameters. res and req are common.
app.get("/", function(request, response){
    response.send("<h1>Hello</h1>");
});
app.get("/contact", function(req, res){
    res.send("Contact Me");
})
app.get("/about", function(req, res){
    res.send("I'm Rebecca'");
})
app.get("/hobbies", function(req, res){
    res.send("I like coffee and melodic death metal");
})

// Start the node server on port 3000
app.listen(3000, function(){
    console.log("Server started on port 3000");
});