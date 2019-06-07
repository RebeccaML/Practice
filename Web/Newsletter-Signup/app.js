const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// Needed to be able to link to css files and images
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    var firstName = req.body.first;
    var lastName = req.body.last;
    var email = req.body.email;

    var data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };

    var jsonData = JSON.stringify(data);

    var options = {
        url: 'https://us20.api.mailchimp.com/3.0/lists/4462338ac8',
        method: "POST",
        headers: { // Basic HTTP authorization
            "Authorization": "rebecca1 " // View app live at https://shielded-reaches-11466.herokuapp.com/
        },
        body: jsonData
    };
    request(options, function (error, response, body) {
        if (error) {
            res.sendFile(__dirname + "/failure.html");
        } else {
            if (response.statusCode === 200) {
                res.sendFile(__dirname + "/success.html");
            } else {
                res.sendFile(__dirname + "/failure.html");
            }
        }
    });
});

app.post("/failure", function(req, res) {
    res.redirect("/");
})

// To work on Heroku, process.env.PORT is used
// The or lets it still run locally as well
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on whatever port Heroku chose");
});

