const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// This is so we can use templates instead of making a zillion static pages
// Must be set below the previous line, otherwise app won't exist yet
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = daysOfWeek[currentDay];

    res.render("list", {dayType: day});
//     if (currentDay === 6 || currentDay === 0) {
//         res.render("list", {dayType: day});
//     } else {
//         res.render("list", {dayType: day});
//     }
});

app.listen(3000, function () {
    console.log("Server started on port 3000.")
})