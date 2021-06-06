function* generator(index) {
  yield index;
  yield index * 2;
  yield index * 3;
}

const generatorFunction = generator(10);

const {value: firstNextValue} = generatorFunction.next();
console.log(firstNextValue);
// Output:
// 10
const {value: secondNextValue, done: secondNextDone} = generatorFunction.next();
console.log(secondNextValue);
console.log(secondNextDone);
// Output:
// 20
// false
const {value: thirdNextValue, done: thirdNextDone} = generatorFunction.next();
console.log(thirdNextValue);
console.log(thirdNextDone);
console.log(generatorFunction.next().done)
// Output:
// 30
// false
// true