export default class Node<TValue> {
  constructor(public value: TValue, public next?: Node<TValue>) {}
}