const leafSimilar = function (root1, root2) {
  const treeTravel = (root, res) => {
    if (!root.left && !root.right) {
      res.push(root.val);
    }

    if (root.left) {
      treeTravel(root.left, res);
    }

    if (root.right) {
      treeTravel(root.right, res);
    }
    return res;
  };

  const arrayRoot1 = treeTravel(root1, []);
  const arrayRoot2 = treeTravel(root2, []);

  let result = true;

  if (arrayRoot1.length !== arrayRoot2.length) {
    return false;
  }

  arrayRoot1.forEach((element, index) => {
    if (element !== arrayRoot2[index]) {
      result = false;
    }
  });
  return result;
};
