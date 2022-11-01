console.log('>>>>> WHILE');
let x = 0;
while (x < 5) {
  console.log('index :', x);
  x++;
}

console.log('\n\n>>>>> RECURSION');
function range(start: number, end: number, fn: (i: number) => void, index?: number): number {
  if (index === end) {
    return index;
  }

  const current = index || start;
  fn(current);

  return range(start, end, fn, current + 1);
}

range(0, 5, console.log);

console.log('\n\n>>>>> CURRY');
function sequence(n1: number) {
  console.log('n1 :', n1);

  return (n2: number) => {
    console.log('n2 :', n2);

    return (n3: number) => {
      console.log('n3 :', n3);
    };
  };
}
sequence(1)(2)(3);

console.log('\n\n>>>>>> COLLECTION');
const numbers = [1, 2, 3, 4 ,5];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  console.log('element:', element);
}