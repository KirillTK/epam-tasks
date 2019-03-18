module.exports = function solveEquation(equation) {
  const regex = /[-|+]\s[0-9]*/gm;
  const str = equation;
  let m;
  const numbers = [];
  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    m.forEach((match) => {
      numbers.push(+match.replace(/\s/g, ''));
    });
  }
  a = +str.match(/^(-)?[0-9]*/gm);
  let x = [];
  let D = Math.pow(numbers[0], 2) - 4 * a * numbers[1];
  x[0] = Math.round(((-1) * numbers[0] + Math.sqrt(D)) / (2 * a));
  x[1] = Math.round(((-1) * numbers[0] - Math.sqrt(D)) / (2 * a));
  return x.sort((firstNumber, secondNumber) => {
    return firstNumber > secondNumber ? 1 : -1;
  });
};
