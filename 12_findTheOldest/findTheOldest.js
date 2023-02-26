const findTheOldest = function(people) {
    let oldest = {};
    let oldestAge = 0;
    for(i=0;i<people.length;i++){
        if(people[i].yearOfDeath == undefined){
            people[i].yearOfDeath = 2023;
        }
        if(oldest == ""){
            oldest = people[i];
            oldestAge = people[i].yearOfDeath - people[i].yearOfBirth;
        } else if(people[i].yearOfDeath - people[i].yearOfBirth > oldestAge){
            oldest = people[i];
            oldestAge = people[i].yearOfDeath - people[i].yearOfBirth;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
