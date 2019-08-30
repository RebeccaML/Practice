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

const me = new Person("Rebecca", "Lowe", 31, ["fighting", "Helm"]);
me.setName("Ajantis Ilvastarr");
console.log(me);
console.log(me.getBio());
const person2 = new Person("Silandra", "Candlekeep", 18);
console.log(person2);
console.log(person2.getBio());