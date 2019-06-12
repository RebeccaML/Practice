const mongoose = require("mongoose");

// Connect to the MongoDB server and switch to the fruitsDB
// If it doesn't exist it will be created
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You need to enter a name!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const orange = new Fruit({
    name: "Orange",
    rating: 6,
    review: "An alright fruit."
});

orange.save();

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({
//     _id: "5d01770bc7e1fd28f47a2aa0"
// }, {
//     name: "Strawberry",
//     rating: 9,
//     review: "Strawberries are delicious"
// }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the document.")
//     }
// });

//Use deleteMany instead to select all matching documents
// Fruit.deleteOne({name: "Raspberry"}, function(err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successfully deleted the document.");
//     }
// });

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//      name: "Amy",
//      age: 24,
//      favouriteFruit: passionfruit
//  });

//person.save();

Person.updateOne({
    _id: "5d0178549a24cd28b4889c85"
}, {
    favouriteFruit: orange
}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated the document.")
    }
});