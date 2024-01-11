/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  let result = -1;

  const helper = (rootTree) => {
    if (!rootTree.left && !rootTree.right) {
      return [rootTree.val, rootTree.val];
    }

    let minLeft = 1000001;
    let minRight = 1000001;
    let maxLeft = -1;
    let maxRight = -1;
    if (rootTree.left) {
      [minLeft, maxLeft] = helper(rootTree.left);
    }
    if (rootTree.right) {
      [minRight, maxRight] = helper(rootTree.right);
    }

    const min = Math.min(minLeft, minRight);
    const max = Math.max(maxLeft, maxRight);

    result = Math.max(
      result,
      Math.abs(rootTree.val - min),
      Math.abs(rootTree.val - max)
    );
    return [Math.min(min, rootTree.val), Math.max(max, rootTree.val)];
  };
  helper(root);
  return result;
};
