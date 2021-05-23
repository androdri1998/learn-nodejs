const words = [
    "ball",
    "pen",
    "joystick",
];

const wordsEntries = words.entries();

for(let wordEntrie of wordsEntries) {
    console.log(`array: [${wordEntrie.toString()}] | value: ${wordEntrie[1]}`);
}
// Output: 
// array: [0,ball] | value: ball
// array: [1,pen] | value: pen
// array: [2,joystick] | value: joystick

const wordsEntriesToNext = words.entries();
console.log(wordsEntriesToNext.next().value);
// Output: 
// [ 0, 'ball' ]