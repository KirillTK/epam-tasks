module.exports = function make(...numbers) {
  this.array = numbers;
  this.result = 0;
  const context = this;

  return function f(...args) {
    if (typeof args[0] === 'function') {
      context.result = context.array.reduce(args[0]);
      return context.result;
    }
    context.array.push(...args);
    return f;
  };
};
