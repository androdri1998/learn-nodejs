const getBirthDate = ({ person }) => {
    const people = {
        'person1': '2001-04-03',
        'person2': '1998-05-12',
        'person3': '2000-06-22',
        'person4': '1999-07-21',
        'person5': '1997-08-05',
    }

    const birthDate = people[person];
    if(!birthDate)
        throw new Error('Birth date not found!');
    
    return birthDate;
}

console.log(`Birth date person 1: ${getBirthDate({ person: 'person1'})}`);
console.log(`Birth date person 3: ${getBirthDate({ person: 'person3'})}`);
console.log(`Birth date person 5: ${getBirthDate({ person: 'person5'})}`);

try {
    console.log(`Birth date person-non-existent: ${getBirthDate({ person: 'person-non-existent'})}`);
} catch(error) {
    console.log(error.message);
}