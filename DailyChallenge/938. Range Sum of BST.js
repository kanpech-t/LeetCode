/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const rangeSumBST = function (root, low, high) {
  if (!root) {
    return 0;
  }

  if (root.val >= L && root.val <= R) {
    return (
      root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
    );
  } else if (root.val < L) {
    return rangeSumBST(root.right, L, R);
  } else {
    return rangeSumBST(root.left, L, R);
  }
};
