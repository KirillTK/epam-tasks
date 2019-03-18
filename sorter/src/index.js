class Sorter {
  constructor() {
    this.array = [];
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let arrayToSort = [];
    for (let i = 0; i < this.array.length; i++) {
      indices.forEach(index => {
        if (index === i) {
          arrayToSort.push(this.array[index]);
        }
      });
    }
    if (this.compareFunction === undefined) {
      arrayToSort.sort((firstNumber, secondNumber) => {
        return firstNumber > secondNumber ? 1 : -1;
      });
    } else {
      arrayToSort.sort(this.compareFunction);
    }
    let iterate = 0;
    for (let i = 0; i < this.array.length; i++) {
      indices.forEach(index => {
        if (i === index) {
          this.array[i] = arrayToSort[iterate];
          iterate++;
        }
      });
    }
    return this.array;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
