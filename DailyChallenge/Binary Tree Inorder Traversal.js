const inorderTraversal = function (root) {
  const res = [];
  travel(root, res);
  return res;
};

const travel = (root, res) => {
  if (root) {
    travel(root.left, res);
    res.push(root.val);
    travel(root.right, res);
  }
};
