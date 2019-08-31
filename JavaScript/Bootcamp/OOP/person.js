class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio = bio + ` ${this.firstName} likes ${like}.`
        });
        return bio;
    }
    setName(fullName) {
        const names = fullName.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`;
    }
    getYearsLeft() {
        return 65 - this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }
    getBio() {
        if (this.grade >= 70) {
            return `${this.firstName} is passing the class.`
        }
        else {
            return `${this.firstName} is failing the class.`
        }
    }
    updateGrade(num) {
        this.grade += num;
    }
}

const myPerson = new Person("Dorn", "Il-Khan", 22, ["killing", "blood"]);
console.log(myPerson.getBio());

const person2 = new Employee("Ajantis", "Ilvastarr", 19, "paladin", ["fighting", "Helm"]);
console.log(person2.getBio());
console.log(person2.getYearsLeft());

const person3 = new Student("Silandra", "Candlekeep", 18, 90, ["sorcery", "mirrors"]);
console.log(person3.getBio());
person3.updateGrade(-50);
console.log(person3.getBio());

// const Person = function (firstName, lastName, age, likes = []) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.likes = likes;
// };

// Person.prototype.getBio = function () {
//     let bio = `${this.firstName} is ${this.age}.`
//     this.likes.forEach((like) => {
//         bio = bio + ` ${this.firstName} likes ${like}.`
//     });
//     return bio;
// }

// Person.prototype.setName = function(fullName) {
//     const names = fullName.split(" ");
//     this.firstName = names[0];
//     this.lastName = names[1];
// };

// const person1 = new Person("Rebecca", "Lowe", 18, ["fighting", "Helm"]);
// person1.setName("Ajantis Ilvastarr");
// console.log(person1);
// console.log(person1.getBio());

// Person.prototype.getBio = function () {
//     return "Testing testing";
// }

// const person2 = new Person("Silandra", "Candlekeep", 18, ["Sorcery", "Mirrors"]);
// console.log(person2);
// console.log(person2.getBio());

// const person3 = new Person("Imoen", "Winthrop", 17, ["Magic", "Pink", "Thieving"]);

// person3.getBio = function () {
//     return "This is fake";
// }
// console.log(person3);
// console.log(person3.getBio());