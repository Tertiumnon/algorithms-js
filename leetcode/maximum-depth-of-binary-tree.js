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
const maxDepth = function(root) {
  console.log(root);
  let context = [];
  let node = { ...root };
  getNodes(context, root);
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
