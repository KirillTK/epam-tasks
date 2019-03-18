module.exports = function getZerosCount(number, base) {
  let count = Number.MAX_VALUE;
  for (let i = 2; i <= base; i++) {
    if (base % i === 0) {
      let countBase = 0;
      while (base % i === 0) {
        base = base / i;
        countBase++;
      }

      let countNumber = 0;
      let numb = number;
      while (numb > 0) {
        numb = Math.floor(numb / i);
        countNumber += numb;
      }

      count = Math.min(count, Math.floor(countNumber / countBase));
    }
  }
  return count;
};
