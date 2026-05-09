const findTheOldest = function(people) {
    for(i=0; i<people.length;i++){
        if(!people[i].yearOfDeath){
            people[i].yearOfDeath = new Date().getFullYear();
        }
    }
    let sorted = people.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
