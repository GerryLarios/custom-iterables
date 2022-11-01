import Node from './Node';

// Queues allow only a FIFO pattern (first in, first out).
// In queues, elements can't be added or removed out of order
export default class Queue<TValue> {
  private firstnode?: Node<TValue>;
  private lastnode?: Node<TValue>;
  size: number;

  constructor() {
    this.size = 0;
  }

  enqueue(value: TValue) {
    const node = new Node(value);
    if (this.lastnode) {
      this.lastnode.next = node;
      this.lastnode = node;
    } else {
      this.firstnode = node;
      this.lastnode = node;
    }

    return this.size++;
  }

  dequeue() {
    const temp = this.firstnode;
    if (this.firstnode === this.lastnode) {
      this.lastnode = undefined;
    }

    this.firstnode = this.firstnode?.next;
    this.size--;

    return temp?.value;
  }

  [Symbol.iterator]() {
    let current = this.firstnode;

    return {
      next() {
        if (current?.value) {
          const { value } = current;
          current = current.next;

          return { done: false, value };
        }

        return { done: true, value: undefined };
        // const value = fn();
        // if (value) {
        //   return { done: false, value };
        // }

        // return { done: true, value };
      },
    };
  }
}