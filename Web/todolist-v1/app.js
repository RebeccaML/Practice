// Made as part of the https://www.udemy.com/course/the-complete-web-development-bootcamp/ course.
// The CSS was provided and I just made a few minor changes

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Practice Javascript", "Practice Python", "Make dinner"];
const workItems = [];

// This is so we can use templates instead of making a zillion static pages
// Must be set below the previous line, otherwise app won't exist yet
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
// So links for css, images etc work
app.use(express.static("public"));

app.get("/", function (req, res) {
    day = date.getDate();
    res.render("list", {
        listTitle: day,
        listItems: items
    });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    // addItem is the submit button name
    if (req.body.addItem === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        listItems: workItems
    });
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server started on port 3000.")
});