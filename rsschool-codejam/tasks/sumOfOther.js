module.exports = function sumOfOther(array) {
  return array.map(value => array.reduce((sum, v) => sum + v) - value);
};
