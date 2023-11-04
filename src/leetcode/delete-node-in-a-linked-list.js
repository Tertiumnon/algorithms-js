/**
 * Definition for singly-linked list.
 */
const ListNode = val => {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = (node: ListNode) => {
  node.val = node.next.val
  node.next = node.next.next
  return node
}

export default deleteNode
