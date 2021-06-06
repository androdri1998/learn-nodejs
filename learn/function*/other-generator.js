function* anotherGenerator(index) {
  yield index + 1;
  yield index + 2;
  yield index + 3;
}

function* generator(index) {
  yield index;
  yield* anotherGenerator(index);
  yield index + 10;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// Output:
// 10
// 11
// 12
// 13
// 20
