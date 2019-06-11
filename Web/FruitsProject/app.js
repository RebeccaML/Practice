const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database name. If it doesn't already exist, it will be created
const dbName = "fruitsDB";

// Create a new MongoClient
const client = new MongoClient(url, {
    useNewUrlParser: true
});

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    findDocuments(db, function () {
        client.close();
    });
});

const insertDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection("fruits");
    // Insert some documents
    collection.insertMany([{
                name: "Apple",
                score: 8,
                review: "Great fruit"
            },
            {
                name: "Orange",
                score: 8,
                review: "Pretty good"
            },
            {
                name: "Banana",
                score: 1,
                review: "Gross!"
            }
        ],
        function (err, result) {
            // Make sure there are no errors
            assert.equal(err, null);
            // Make sure we have three results
            assert.equal(3, result.result.n);
            assert.equal(3, result.ops.length);
            console.log("Inserted 3 documents into the collection");
            callback(result);
        });
};

const findDocuments = function (db, callback) {
    // Get the documents collectio
    const collection = db.collection("fruits");
    // Find some documents
    collection.find({}).toArray(function (err, fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
};