const assert = require('assert');
const recursion = require('../tasks/recursion');

const tree = {
  value: 100,
  left: { value: 90, left: { value: 70 }, right: { value: 99 } },
  right: { value: 120, left: { value: 110 }, right: { value: 130 } },
};

const tree2 = {
  value: 100,
  left: { value: 94, left: { value: 70 }, right: { value: 99 } },
  right: { value: 120, left: { value: 110 }, right: { value: 130 } },
};

const tree3 = {
  value: 100,
  left: { value: 99 },
  right: { value: 120 },
};

describe('recursion', () => {
  it('test1', () => {
    const result = recursion(tree);
    assert.deepEqual(result, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('test2', () => {
    const result = recursion(tree2);
    assert.deepEqual(result, [[100], [94, 120], [70, 99, 110, 130]]);
  });

  it('test3', () => {
    const result = recursion(tree3);
    assert.deepEqual(result, [[100], [99, 120]]);
  });
});
