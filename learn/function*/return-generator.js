function* yieldAndReturn() {
  yield "Y";
  return "R";
}

const gen = yieldAndReturn();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
// Output:
// { value: 'Y', done: false }
// { value: 'R', done: true }
// { value: undefined, done: true }