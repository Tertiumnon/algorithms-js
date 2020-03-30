/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (root === null) {
    return 0;
  }
  const res = [0, 0];
  if (root.left) {
    res[0] += maxDepth(root.left);
  }
  if (root.right) {
    res[1] += maxDepth(root.right);
  }
  return Math.max(res[0], res[1]) + 1;
};

module.exports = maxDepth;
