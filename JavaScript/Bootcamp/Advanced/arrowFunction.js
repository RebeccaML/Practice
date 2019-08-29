const square = (num) => num * num;

console.log(square(2));

const people = [{
    name: "Silandra",
    age: 18
}, {
    name: "Ajantis",
    age: 19
}, {
    name: "Imoen",
    age: 17
}, {
    name: "Gorion",
    age: 50
}];

const under30 = people.filter((person) => person.age < 30);
const age18 = people.find((person) => person.age === 18);

console.log(under30);
console.log(age18);