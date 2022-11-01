import Node from './Node';

// Stacks are a data structure that store information in the form of a list.
// They allow only adding and removing elements under a LIFO pattern (last in, first out).
export default class Stack<TValue> {
  private firstnode?: Node<TValue>;
  private lastnode?: Node<TValue>;
  size: number;

  constructor() {
    this.size = 0;
  }

  public get first(): TValue | undefined {
    return this.firstnode?.value;
  }

  public get last(): TValue | undefined {
    return this.lastnode?.value;
  }

  push(value: TValue) {
    const node = new Node(value);

    if (this.firstnode) {
      const temp = this.firstnode;
      this.firstnode = node;
      this.firstnode.next = temp;
    } else {
      this.firstnode = node;
      this.lastnode = node;
    }

    this.size++;
  }

  pop() {
    const temp = this.firstnode;
    if (this.firstnode === this.lastnode) {
      this.lastnode = undefined;
    }

    this.lastnode = this.firstnode?.next;
    this.size--;

    return temp?.value;
  }

  [Symbol.iterator]() {
    let current = this.firstnode;

    return {
      next() {
        if (current?.value) {
          const { value } = current;
          current = current?.next;

          return { done: false, value };
        }

        return { done: true, value: undefined };
      },
    };
  }
}
