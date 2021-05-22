const smartphone = {
    type: "smartphone",
    launch: "2018",
    name: "unknown",
    ram: "3GB",
    rom: "128GB",
};

const map = new Map(Object.entries(smartphone));

map.set("type_screen", "LCD")

console.log("Map: ", map);
// Output:
// Map:  Map(6) {
//     'type' => 'smartphone',
//     'launch' => '2018',
//     'name' => 'unknown',
//     'ram' => '3GB',
//     'rom' => '128GB',
//     'type_screen' => 'LCD'
//   }
console.log("type_screen: ", map.get("type_screen"));
// Output:
// type_screen:  LCD
console.log("size: ", map.size);
// Output:
// size:  6

map.delete("name");
console.log("Map: ", map);
// Output:
// Map:  Map(5) {
//     'type' => 'smartphone',
//     'launch' => '2018',
//     'ram' => '3GB',
//     'rom' => '128GB',
//     'type_screen' => 'LCD'
//   }
console.log("size: ", map.size);
// Output:
// size:  5

console.log(map.keys());
// Output:
// [Map Iterator] { 'type', 'launch', 'ram', 'rom', 'type_screen' }