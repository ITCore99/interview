/**
 * 这是一个单列表反转
 */
const sinleLink = {value: 1, next: {value:2, next: {value: 3, next: {value: 4, next: {value: 5,next:null}}}}}

/**
 * 第一种解法 使用双指针 + 遍历的方式
 */
function singleLinkReversal1(head) {
  if(!head || !head.next) return head
  let prev = null
  let current = head
  while(current) {
    var next = current.next
    current.next = prev // 反转指针
    prev = current
    current = next
  }
  head = prev
  return head
}
// console.log('测试',JSON.stringify(singleLinkReversal1(sinleLink)))

/**
 * 第二种解法 使用递归的方式 使用内部函数创建局部作用域保存变量
 */
function singleLinkReversal2(head) {
  if (!head || !head.next) return head
  return helper(null, head)
  function helper(prev, current) {
    if(!current) return prev
      const next = current.next  // 保存下一个节点
      current.next = prev // 反转指正
      return helper(current, next)
  }
}
console.log('测试',JSON.stringify(singleLinkReversal2(sinleLink)))