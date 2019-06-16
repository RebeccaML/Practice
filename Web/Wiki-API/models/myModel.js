const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/wikiDB", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("article", articleSchema);

exports.Article = Article;