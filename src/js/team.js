export default class Team {
  // Класс является итератором
  constructor(list) {
    this.members = new Set(list);
    this.count = 0;
  }

  // Для возможности использовать объект в цикле for..of
  [Symbol.iterator]() { return this; }

  next() {
    if (this.count === this.members.size) {
      return {
        value: undefined,
        done: true,
      };
    }
    this.count += 1;
    return {
      value: Array.from(this.members)[this.count - 1],
      done: false,
    };
  }
}
