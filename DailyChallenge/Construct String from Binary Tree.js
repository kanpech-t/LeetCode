const tree2str = (root) => {
  let res = ``;
  res = travel(root, res);
  return String(res);
};

const travel = (root, res) => {
  console.log(root);
  if (root) {
    if (!root.left && !root.right) {
      return root.val;
    } else if (!root.left && root.right) {
      res += `${root.val}()(${travel(root.right, res)})`;
    } else if (root.left && root.right) {
      res += `${root.val}(${travel(root.left, res)})(${travel(
        root.right,
        res
      )})`;
    } else {
      res += `${root.val}(${travel(root.left, res)})`;
    }
  }
  return res;
};
