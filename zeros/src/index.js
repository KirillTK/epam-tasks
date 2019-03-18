module.exports = function getZerosCount(number) {
  let res = 0;
  while (number > 0) {
    number = parseInt(number / 5);
    res += parseInt(number);
  }
  return res;
};
