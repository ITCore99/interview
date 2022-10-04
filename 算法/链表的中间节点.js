/**
 * 链表的中间节点
 * 给定一个头结点为head非空单链表，返回链表的中间节点。如果有两个中间节点，则返回第二个中间节点
 *  例如: [1, 2, 3, 4, 5] 输出节点为3 
 *  例如: [1, 2, 3, 4, 5, 6] 中间节点是 [3, 4] 返回 4
 *  解法：双指针方式求解 定义两个指针一个slow慢指针 一个fast快指针 slow指针一次只移动一个数 fast指针一次移动两个数
 *  遍历链表
 *  第一例子(长度为奇数): 遍历完之后 fast指针指向 5 slow指针指向 3 slow指针指向的刚好是中间节点
 *  第二例子(长度为偶数): fast指向null的时候 需要遍历三次 slow指向4的位置 正好也是题目中要求的中间第二个节点
 */

// 获取列表的中间节点
function getMiddleLinkList(head) {
  if(!head || !head.next) return head
  let fast = head
  let slow = head
  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

// 测试
const oddHead = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null
        }
      }
    }
  }
}
const evenHead = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: 6,
            next: null
          }
        }
      }
    }
  }
}
console.log(getMiddleLinkList(oddHead))
console.log(getMiddleLinkList(evenHead))