const smartphone = {
    type: "smartphone",
    launch: "2018",
    name: "unknown",
    ram: "3GB",
    rom: "128GB",
};

const smartphoneEntries = Object.entries(smartphone);

smartphoneEntries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
// Output:
// type: smartphone
// launch: 2018
// name: unknown
// ram: 3GB
// rom: 128GB