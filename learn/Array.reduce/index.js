const arr = [
    {
        age: 20,
        vacations: false,
    },
    {
        age: 18,
        vacations: true,
    },
    {
        age: 21,
        vacations: true,
    },
    {
        age: 22,
        vacations: true,
    },
    {
        age: 23,
        vacations: false,
    },
];

const ageOfWhoAreInVacations = arr
    .reduce((accumulator, currentValue) => {
        if(currentValue.vacations) {
            return accumulator + currentValue.age;
        }

        return accumulator;
    }, 0);

const ageOfWhoAreNotInVacations = arr
    .reduce((accumulator, currentValue) => {
        if(!currentValue.vacations){
            return accumulator + currentValue.age ;
        }

        return accumulator;
    }, 0)

const amountInVacations = arr
    .reduce((accumulator, currentValue) => {
        if(currentValue.vacations) {
            return accumulator + 1;
        }
        
        return accumulator;
    }, 0);

console.log(`age items are on vacations: ${ageOfWhoAreInVacations}`);
// Output:
// age items are on vacations: 61
console.log(`age items aren't on vacations: ${ageOfWhoAreNotInVacations}`);
// Output:
// age items aren't on vacations: 43
console.log(`amount age item on vacations: ${amountInVacations}`);
// Output:
// amount age item on vacations: 3