/**
 * 相交链表
 * 给你两个单链表的头结点headA和headB，请找出并返回两个列表相交的起始点。如果两个链表没有交点则返回null 
 * 进阶：要求时间复杂度O(m) 空间复杂度 O(1)
 * 
 * 解法1: 暴力穷举法 就是那其中一条链表进行遍历逐个和另一个链表进行比较如果相同则返回 该节点就是相交节点 时间复杂度 O(m*n) 太高
 * 解法2: 使用一个map 来缓存一个链表的节点 遍历另一个节点与map中的节点比对 空间复杂度O(n)
 * 解法3：使用快慢指针的方式 设置两个指针分别指向两个链表的表头 同时开始遍历 先遍历完的指针(也就是短一点的链表)指向长列表的头部 较长链表的指针遍历完指向短链表 继续遍历如果
 * 出现两个节点相同则返回说明就是该节点 否则当 两个指针都为null的时候 返回null 说明此链表不想交
 * 
 */


/**
 * 获取焦点 相交链表
 */
function getPointOfIntersectLinkList(headA, headB) {
  if(!headA || !headB) return null
  let pA = headA
  let pB = headB
  while(pA !== pB) {
    pA = pA === null ? headB : pA.next // 当pA先遍历完则pA指向pB
    pB = pB === null ? headA : pB.next // 以此类推
  }
  return pA
}

// 测试

const headA = {
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

const headB = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: headA.next.next.next
    }
  }
}
console.log(getPointOfIntersectLinkList(headA, headB))