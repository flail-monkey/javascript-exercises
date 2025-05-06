const findTheOldest = function(people) {
    oldestAge = 0
    oldestPerson = null
    const currentYear = 2025

    for (i=0; i<people.length; i++)
        {
        // get person info
        person = people[i]
        if (person.yearOfDeath === undefined)
            {yearOfDeath = currentYear}
        else {yearOfDeath = person.yearOfDeath}

        // calculate age
        age = yearOfDeath - person.yearOfBirth

        // update if oldest
        if (age > oldestAge)
            {
            oldestAge = age
            oldestPerson = person
            }
        }
    return oldestPerson

};

// Do not edit below this line
module.exports = findTheOldest;
