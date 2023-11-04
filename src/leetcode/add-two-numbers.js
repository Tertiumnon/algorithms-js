/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor (val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const result = new ListNode()
  let addVal = 0
  let resNode = result
  let l1node = l1
  let l2node = l2
  while ((l1node && l1node.val >= 0) || (l2node && l2node.val >= 0) || addVal) {
    const val = (l1node?.val ? l1node.val : 0) +
      (l2node?.val ? l2node.val : 0) +
      addVal
    if (val >= 10) {
      const valStr = val.toString()
      resNode.val = Number(valStr[1])
      addVal = Number(valStr[0])
    } else {
      resNode.val = val
      addVal = 0
    }
    resNode.next = (l1node && l1node.next !== null) || (l2node && l2node.next !== null) || addVal
      ? new ListNode()
      : null
    resNode = resNode.next
    l1node = l1node && l1node.next !== null ? l1node.next : null
    l2node = l2node && l2node.next !== null ? l2node.next : null
  }
  return result
}

export default addTwoNumbers
