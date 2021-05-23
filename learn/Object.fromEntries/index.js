const smartphoneMap = new Map([
    ["type", "smartphone"],
    ["launch", "2018"],
    ["name", "unknown"],
    ["ram", "3GB"],
    ["rom", "128GB"],
]);

const smartphoneArray = [
    ["type", "smartphone"],
    ["launch", "2018"],
    ["name", "unknown"],
    ["ram", "3GB"],
    ["rom", "128GB"],
];

const smartphone = {
    type: "smartphone",
    launch: "2018",
    name: "unknown",
    ram: 3,
    rom: 128,
};

const smartphone1 = Object.fromEntries(smartphoneMap);
const smartphone2 = Object.fromEntries(smartphoneArray);
const smartphone3 = Object.fromEntries(
    Object.entries(smartphone)
        .map(([key, value]) => {
            if(typeof value === "number") {
                return [key, `${value * 2}GB`];
            }      

            return [key, value];
        })
);

console.log(typeof smartphone1, smartphone1);
// Output:
// object {
//     type: 'smartphone',
//     launch: '2018',
//     name: 'unknown',
//     ram: '3GB',
//     rom: '128GB'
//   }
console.log(typeof smartphone2, smartphone2);
// Output:
// object {
//     type: 'smartphone',
//     launch: '2018',
//     name: 'unknown',
//     ram: '3GB',
//     rom: '128GB'
//   }
console.log(typeof smartphone3, smartphone3);
// Output:
// object {
//     type: 'smartphone',
//     launch: '2018',
//     name: 'unknown',
//     ram: '6GB',
//     rom: '256GB'
//   }