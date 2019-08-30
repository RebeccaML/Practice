const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
};

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => {
        bio = bio + ` ${this.firstName} likes ${like}.`
    });
    return bio;
}

Person.prototype.setName = function(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
};

const person1 = new Person("Rebecca", "Lowe", 18, ["fighting", "Helm"]);
person1.setName("Ajantis Ilvastarr");
console.log(person1);
console.log(person1.getBio());

Person.prototype.getBio = function () {
    return "Testing testing";
}

const person2 = new Person("Silandra", "Candlekeep", 18, ["Sorcery", "Mirrors"]);
console.log(person2);
console.log(person2.getBio());

const person3 = new Person("Imoen", "Winthrop", 17, ["Magic", "Pink", "Thieving"]);

person3.getBio = function () {
    return "This is fake";
}
console.log(person3);
console.log(person3.getBio());