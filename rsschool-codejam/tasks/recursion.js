module.exports = function recursion(tree) {
  const arrayTree = [tree];
  const result = [];

  function recursiveBFS(levelElements) {
    const nodes = levelElements.filter(element => element !== undefined);

    if (nodes.length === 0) return;
    result.push(nodes.map(node => node.value));

    const children = nodes.reduce((acc, el) => {
      acc.push(el.left, el.right);
      return acc;
    }, []);

    recursiveBFS(children);
  }

  recursiveBFS(arrayTree);
  return result;
};
