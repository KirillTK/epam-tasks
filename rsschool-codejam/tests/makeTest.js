const assert = require('assert');
const make = require('../tasks/make');

function sum(a, b) {
  return a + b;
}

describe('make', () => {
  it('test1', () => {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(result, 777);
  });

  it('test2', () => {
    const result = make(1)(2)(sum);
    assert.deepEqual(result, 3);
  });

  it('test3', () => {
    const result = make(1)(sum);
    assert.deepEqual(result, 1);
  });
});
