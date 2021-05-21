const words = [
    "ball",
    "pen",
    "joystick",
];

const wordsEntries = words.entries();

for(let wordEntrie of wordsEntries) {
    console.log(`array: [${wordEntrie.toString()}] | value: ${wordEntrie[1]}`);
}

const wordsEntriesToNext = words.entries();
console.log(wordsEntriesToNext.next().value);