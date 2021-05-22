'use strict';

const smartphone = {
    type: "smartphone",
    launch: "2018",
    name: "unknown",
    ram: "3GB",
    rom: "128GB",
};

Object.seal(smartphone);

smartphone.name = "unknown test";

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

console.log(`Object is sealed: ${Object.isSealed(smartphone)}`)
// Output: 
// Object is sealed: true
console.log(smartphone);
// Output: 
// {
//   type: 'smartphone',
//   launch: '2018',
//   name: 'unknown test',
//   ram: '3GB',
//   rom: '128GB'
// }