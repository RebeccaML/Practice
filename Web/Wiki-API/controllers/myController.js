const model = require("../models/myModel");
let Article = model.Article;

//Requests targeting all articles

exports.get = (req, res) => {
    Article.find({}, function (err, foundArticles) {
        if (!err) {
            res.send(foundArticles);
        } else {
            res.send(err);
        }
    });
};
exports.post = (req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save(function (err) {
        if (!err) {
            res.send("New article successfully saved.");
        } else {
            res.send(err);
        }
    });
};
exports.delete = (req, res) => {
    Article.deleteMany(function (err) {
        if (!err) {
            res.send("Successfully deleted all articles.");
        } else {
            res.send(err);
        }
    });
};

//Requests targeting a specific article

exports.getArticle = (req, res) => {
    Article.findOne({
        title: req.params.articleTitle
    }, function (err, foundArticle) {
        if (!err) {
            res.send(foundArticle);
        } else {
            res.send("No article matching that title was found.");
        }
    });
};
exports.putArticle = (req, res) => {
    Article.findOneAndUpdate({
            title: req.params.articleTitle
        }, {
            $set: {
                title: req.body.title,
                content: req.body.content
            }
        }, {
            overwrite: true
        },
        function (err, article) {
            if (!err) {
                res.send("Successfully updated article.");
            } else {
                res.send(err);
            }
        });
};
exports.patchArticle = (req, res) => {
    Article.findOneAndUpdate({
            title: req.params.articleTitle
        }, {
            $set: {
                title: req.body.title,
                content: req.body.content
            }
        },
        function (err, article) {
            if (!err) {
                res.send("Successfully updated article.");
            } else {
                res.send(err);
            }
        });
};
exports.deleteArticle = (req, res) => {
    Article.deleteOne({
        title: req.params.articleTitle
    }, function (err) {
        if (!err) {
            res.send("Successfully deleted article.");
        } else {
            res.send(err);
        }
    });
};