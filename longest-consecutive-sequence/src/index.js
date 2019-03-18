module.exports = function longestConsecutiveLength(array) {
  let setOfNumber = new Set(array);
  let count = 0, max = 0;
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    while (setOfNumber.has(number)) {
      number++;
      count++;
    }
    if (max < count) {
      max = count;
    }
    count = 0;
  }
  return max;
};
