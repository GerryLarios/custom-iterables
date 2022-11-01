import constructs from './constructs';
import { LinkedList, Queue, Range, Stack } from './custom';

const array = [1, 2, 3, 4, 5];
constructs('Array', array);

const str = 'TANGO';
constructs('String', str);

const set = new Set(array);
constructs('Set', set);

const map = new Map([[1, 'A'], [2, 'B'], [3, 'C']]);
constructs('Map', map);

const range = new Range(1, 3);
constructs('Range', range);

const linkedlist = new LinkedList<string>();
linkedlist.push('ITEM A');
linkedlist.push('ITEM B');
linkedlist.push('ITEM C');
constructs('LinkedList', linkedlist);

const queue = new Queue<string>();
queue.enqueue('COMMAND A');
queue.enqueue('COMMAND B');
queue.enqueue('COMMAND C');
constructs('Queue', queue);

const stack = new Stack<string>();
stack.push('PROCESS A');
stack.push('PROCESS B');
stack.push('PROCESS C');
constructs('Stack', stack);

console.log('\n\n\n>>>> ITER.NEXT');
const iter = array[Symbol.iterator]();
let done = false;
while (!done) {
  const next = iter.next();
  console.log('iter.next()', next);

  done = next.done ?? false;
}
