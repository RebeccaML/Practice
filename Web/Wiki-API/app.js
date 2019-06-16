//https://www.udemy.com/course/the-complete-web-development-bootcamp/ course.

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const controller = require("./controllers/myController");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

//Requests targeting all articles

app.route("/articles")
    .get(controller.get)
    .post(controller.post)
    .delete(controller.delete);

//Requests targeting a specific article

app.route("/articles/:articleTitle")
    .get(controller.getArticle)
    .put(controller.putArticle)
    .patch(controller.patchArticle)
    .delete(controller.deleteArticle);

app.listen(3000, function () {
    console.log("Server started on port 3000.")
});