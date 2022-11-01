import Node from './Node';

export default class LinkedList<TValue> {
  private headnode?: Node<TValue>;
  private tailnode?: Node<TValue>;
  size: number;

  constructor() {
    this.size = 0;
  }

  push(value: TValue) {
    const node = new Node(value);
    if (this.tailnode) {
      this.tailnode.next = node;
      this.tailnode = node;
    } else {
      this.headnode = node;
      this.tailnode = this.headnode;
    }
  }

  pop() {
    if (!this.headnode) {
      return undefined;
    }

    let currentnode = this.headnode;
    let newtail = currentnode;
    while (currentnode.next) {
      newtail = currentnode;
      currentnode = currentnode.next;
    }

    this.tailnode = newtail;
    this.tailnode.next = undefined;

    this.size--;
    if (this.size === 0) {
      this.headnode = undefined;
      this.tailnode = undefined;
    }

    return currentnode.value;
  }

  shift() {
    if (!this.headnode) {
      return undefined;
    }

    const currenthead = this.headnode;
    this.headnode = currenthead.next;

    this.size--;
    if (this.size === 0) {
      this.tailnode = undefined;
    }

    return currenthead.value;
  }

  unshift(value: TValue) {
    const node = new Node(value);
    if (!this.headnode) {
      this.headnode = node;
      this.tailnode = this.headnode;
    }
    node.next = this.headnode;
    this.headnode = node;
    this.size++;
  }

  get(index: number) {
    return this._get(index)?.value;
  }

  private _get(index: number) {
    if (index < 0 || index >= this.size) {
      return undefined;
    }

    let currentnode = this.headnode;
    let counter = 0;
    while (counter !== index) {
      currentnode = this.headnode?.next;
      counter++;
    }

    return currentnode;
  }

  set(index: number, value: TValue) {
    const node = this._get(index);
    if (node) {
      node.value = value;

      return true;
    }

    return false;
  }

  insert(index: number, value: TValue) {
    if (index < 0 || index > this.size) {
      return false;
    }

    if (index === this.size) {
      this.push(value);

      return true;
    }

    if (index === 0) {
      this.unshift(value);

      return true;
    }

    const node = new Node(value);
    const prev = this._get(index - 1);
    if (!prev?.next) {
      return false;
    }

    const temp = prev.next;
    prev.next = node;
    node.next = temp;
    this.size++;

    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.size) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.size - 1) {
      return this.pop();
    }

    const prev = this._get(index - 1);
    if (!prev?.next) {
      return undefined;
    }

    const removed = prev.next;
    prev.next = removed.next;
    this.size--;

    return removed.value;
  }

  reverse() {
    let node = this.headnode;
    this.headnode = this.tailnode;
    this.tailnode = node;

    let next;
    let prev;
    for (let i = 0; i < this.size; i++) {
      if (node?.next) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
    }
  }

  [Symbol.iterator]() {
    let current = this.headnode;

    return {
      next() {
        if (current?.value) {
          const { value } = current;
          current = current.next;

          return { done: false, value };
        }

        return { done: true, value: undefined };
      },
    };
  }
}