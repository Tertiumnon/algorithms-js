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
  const result = [0, 0];
  if (root.left) {
    result[0] += maxDepth(root.left);
  }
  if (root.right) {
    result[1] += maxDepth(root.right);
  }
  return Math.max(result[0], result[1]) + 1;
};

module.exports = maxDepth;
