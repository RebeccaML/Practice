//Keeping this version for reference

const mongoose = require("mongoose");

// Connect to the MongoDB server and switch to the fruitsDB
// If it doesn't exist it will be created
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const banana = new Fruit({
    name: "Banana",
    rating: 1,
    review: "Gross."
});

const raspberry = new Fruit({
    name: "Raspberry",
    rating: 7,
    review: "Usually good."
});

const apricot = new Fruit({
    name: "Apricot",
    rating: 10,
    review: "The best for the 2 weeks or so of the year they're in season."
});

// Fruit.insertMany([banana, raspberry, apricot], function(err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successfully saved all the fruits to fruitsDB.")
//     }
// });

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});

// person.save();

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(function(fruit) {
        console.log(fruit.name);
       });
    }
});