export default function constructs(name: string, iterable: Iterable<unknown>) {
  console.log('ITERABLE:', name, iterable);

  console.log('\n\n>>>> Destructuring via an iterable pattern:');
  const [first, second, third] = iterable;
  console.log('const [first, second, third] = iterable');
  console.log('first :', first);
  console.log('second :', second);
  console.log('third :', third);

  console.log('\n\n>>>> for-of loop');
  console.log('for (const iterator of iterable)\n\titerator');
  for (const iterator of iterable) {
    console.log('iterator :', iterator);
  }

  console.log('\n\n>>>> Array.from');
  const array = Array.from(iterable);
  console.log('const new_array = Array.from(iterable)');
  console.log('new_array :', array);

  console.log('\n\n>>>> Spread operator');
  console.log('[...iterable]');
  console.log([...iterable]);
}
