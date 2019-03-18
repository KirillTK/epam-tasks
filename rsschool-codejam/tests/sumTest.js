const assert = require('assert');
const sumOfOther = require('../tasks/sumOfOther');

describe('sumOfOther', () => {
  it('test1', () => {
    const array = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(array, [8, 7, 6, 9]);
  });

  it('test2', () => {
    const array = sumOfOther([2, 10, 4, 1]);
    assert.deepEqual(array, [15, 7, 13, 16]);
  });

  it('test3', () => {
    const array = sumOfOther([]);
    assert.deepEqual(array, []);
  });
});
