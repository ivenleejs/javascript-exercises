const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    let oldest = 0;
    array.forEach((person) => {
        let age = person.yearOfDeath - person.yearOfBirth;
        if (!person.yearOfDeath) {
            age = currentYear - person.yearOfBirth;
        }
        if (age > oldest) {
            oldest = age;
        }
    });
    return array.filter((person) => {
        let age = 0;
        if (!person.yearOfDeath) {
            age = currentYear - person.yearOfBirth;
        }
        else {age = person.yearOfDeath - person.yearOfBirth}
        return age == oldest;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
