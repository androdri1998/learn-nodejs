const arr = ["one", "two", "three"];

const interator = arr.keys();

for(let index = interator.next();!index.done;) {
    console.log(`key: ${index.value} value: ${arr[index.value]}`);
    index = interator.next();
}
// Output: 
// key: 0 value: one
// key: 1 value: two
// key: 2 value: three