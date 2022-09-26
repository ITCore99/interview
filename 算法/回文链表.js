/**
 * 给你一个单链表的头节点head，请判断改链表是否是回文链表，如果是则返回true 不是返回false
 * 进阶: 时间复杂度O(n) 空间复杂度O(1)
 * 所谓的回文链表就是正向读取的结果和反向读取的结果一致 类似: 1 —> 2 -> 2 -> 1 或者 1 —> 2 -> 3 -> 2 -> 1
 * 解法1: 使用双指针的方式 遍历将链表放置到一个数组中 再定义两个指正分别指向头和尾 遍历比较指针的值是否相等如果不相等返回false 必然不是 空间复杂度为O(n)
 * 解法2: 在不使用额外的空间下 我们使用双指针和反转链表的方式 首先定义两个指针 一个快指针fast 一次移动两格 一个慢指针slow 一次移动两格。
 * 如果链表的长度是偶数则移动若干次之后fast指向null 此时对slow所指的位置之后链表进行反转 将fast指正移动到链表的头部 进行遍历对比。
 * 如果链表的长度为奇数则移动若干次之后fast会指向最后一个节点 fast.next === null 此时slow指向的位置是链表中的中心节点 所以此时我们现将slow向后移动一位并将slow之后的链表
 * 进行翻转 再将fast移动链表头部 进行遍历对比这里的操作和偶数长度一致 总结下 就是对于slow处理不同
 */

/**
 * 判断是不是回文链表
 */
function isHuiWenLinkList(head) {
  if(!head) return false
  let fast = head
  let slow = head
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  if(fast) { // 说明链表的长度为奇数 
    slow = slow.next // slow指针向后移动一位
  }
  slow = reversalLinkList(slow) // 翻转链表
  fast = head // 将快指针指向链表头部
  while(slow) {
    if(slow.value !== fast.value) {
      return false
    }
    slow = slow.next
    fast = fast.next
  }
  return true
}

/**
 * 翻转链表
 */
function reversalLinkList(head) {
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

// 测试
const evenLinkList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 2,
      next: {
        value: 1,
        next: null
      }
    }
  }
}
const oddLinkList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 2,
        next: {
          value: 1,
          next: null
        }
      }
    }
  }
}

const linkList = {
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
console.log(isHuiWenLinkList(evenLinkList))
console.log(isHuiWenLinkList(oddLinkList))
console.log(isHuiWenLinkList(linkList))