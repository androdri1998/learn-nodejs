'use strict';

const smartphone = {
    type: "smartphone",
    launch: "2018",
    name: "unknown",
    ram: "3GB",
    rom: "128GB",
};

Object.freeze(smartphone);

try {
    // when is not using 'strict mode' will not thrown Error
    smartphone.name = "test";
} catch(err) {
    console.log(err.message);
}
// Output:
// Cannot assign to read only property 'name' of object '#<Object>'

try {
    // when is not using 'strict mode' will not thrown Error
    delete smartphone.name;
} catch(err) {
    console.log(err.message);
}
// Output:
// Cannot delete property 'name' of #<Object>

try {
    // when is not using 'strict mode' will not thrown Error
    smartphone.type_screen = "LCD"
} catch(err) {
    console.log(err.message);
}
// Output:
// Cannot add property type_screen, object is not extensible

console.log(`Object is frozen: ${Object.isFrozen(smartphone)}`)
// Output:
// Object is frozen: true
console.log(smartphone);
// Output:
// {
//     type: 'smartphone',
//     launch: '2018',
//     name: 'unknown',
//     ram: '3GB',
//     rom: '128GB'
//  }