/**
 * 如果给定一个链表 判断链表中是否有环
 * 如果有换的 返回true 如果没环 返回false
 * 
 * 解法：
 * 1、使用标记法就是 遍历列表对遍历过的节点进行打标 遍历到节点先判断是否打过标 打过标说明已经遍历过 是有环的
 * 2、使用快慢指针的方式 由于快指针要比慢指针移动的快 所以如果有环的话必定会指向同一个节点
 */

// 解法1 使用打标的方式 注意如果使用打标的话会修改原始数据结构 这个为了避免我们可以使用set 来存储已经遍历过的
function answerByTag(head) {
  while(head) {
    if(head.tag) { 
      return true
    }
    head.tag = true
    head = head.next
  }
  return false
}

// 解法2 使用快慢指针的方式
function answerByQuickSlowPointer(head) {
  if(!head) return false
  let slow = head
  let quick = head.next
  while(quick &&  quick.next) {
    if(slow === quick) return true
    slow = slow.next
    quick = quick.next.next
  }
  return false
}

var node1 = {
  value: 4,
  next: node
}
var node = {
  value: 5,
  next: node1
}
node1.next = node
node.next = node1

var head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: node1
    }
  }
}
// 测试

console.log(answerByTag(head))
console.log('===== 华丽的分割线 =======')
console.log(answerByQuickSlowPointer(head))