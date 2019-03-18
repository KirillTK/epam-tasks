module.exports = function check(str, bracketsConfig) {
  let regExpPattern = '';
  bracketsConfig.forEach(config => {
    regExpPattern += '\[\\' + config[0] + '\][\\' + config[1] + '\]|' +
      '\[' + config[0] + '\][' + config[1] + '\]|';
  });
  let regExp = new RegExp(regExpPattern.substr(0, regExpPattern.length - 1), 'g');
  let strLength = str.length;
  while (strLength !== 0) {
    str = str.replace(regExp, '');
    if (strLength === str.length) {
      break;
    }
    strLength = str.length;
  }
  return str.length === 0;
};
