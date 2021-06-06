function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

const gen = logGenerator();

gen.next();
gen.next('- log 1');
gen.next('- log 2');
gen.next('- log 3');
// Output:
// 0
// 1- log 1
// 2- log 2
// 3- log 3