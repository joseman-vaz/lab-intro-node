class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }
  get(pos) {
    if (pos >= this.items.length || pos < 0) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    if (!this.items.length) {
      return 0;
    }
    return this.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    const sum = this.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const avg = sum / this.items.length;
    return avg;
  }
}

module.exports = SortedList;
