export default class Range {
  constructor(private readonly from: number, private readonly to: number) {}

  [Symbol.iterator]() {
    let index = this.from;
    const limit = this.to;

    return {
      next() {
        if (index <= limit) {
          return { done: false, value: index++ };
        }

        return { done: true, value: undefined };
      },
    };
  }
}
