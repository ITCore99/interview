/**
 * 删除列表中的重复元素
 * 存在一个按照升序排列的链表，给你这个链表的头结点head，请删除列表中的重复元素，使得每一个元素只出现一次。
 * 返回同样按照升序的结果链表
 * 解法1: 注意有题目可知链表是升序排列的所以必然重复的节点是连在一起的
 */
function delRepeatNode(head) {
  if(!head) return head
 let currentNode = head
 while(currentNode.next !== null) {
  if(currentNode.value === currentNode.next.value) {
    currentNode.next = currentNode.next.next // 注意这里只是进行将链表指向下下个节点 作用是在下一次循环中下下个节点在于当前节点比较
  } else {
    currentNode = currentNode.next
  }
 }
 return head
}

// 测试
const head = {
  value: 1,
  next: {
    value: 1,
    next: {
      value: 2,
      next: null
    }
  }
}
const head2 = {
  value: 1,
  next: {
    value: 1,
    next: {
      value: 1,
      next: {
        value: 2,
        next: null
      }
    }
  }
}
console.log(delRepeatNode(head))
console.log(delRepeatNode(head2))