function* idMarker() {
  let index = 0;
  while(true) 
    yield index++;
}

const functionGenerator = idMarker();

console.log(functionGenerator.next().value);
console.log(functionGenerator.next().value);
console.log(functionGenerator.next().value);
console.log(functionGenerator.next().value);
// Output:
// 0
// 1
// 2
// 3
