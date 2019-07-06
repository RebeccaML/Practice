let findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const highestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
        return highestAge < currentAge ? person : oldest;
    });
};


function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
module.exports = findTheOldest
