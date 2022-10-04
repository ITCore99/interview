/**
 * 二叉树的最大深度
 */

/**
 * 获取二叉树的最大深度(递归)
 */
function getMaxDepthOfBinaryTree(tree) {
  if(!tree)  return 0 
  return Math.max(getMaxDepthOfBinaryTree(tree.left), getMaxDepthOfBinaryTree(tree.right)) + 1 // 获取
}

/**
 * 获取最大深度通过队列
 */
function getMaxDepthOfBinaryTreeByQueue(tree) {
  if(!tree) return 0
  const queue = []
  queue.push(tree)
  let depth = 0
  while(queue.length) {
    let size = queue.length // 使用size记录当前层是否已经遍历完
    while(size > 0) {
      const node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      size--
    }
    depth++
  }
  return depth
}

// 测试
const head = {
  value: 3,
  left: {
    value: 9,
    left: null,
    right: null
  },
  right: {
    value: 20,
    left: {
      value: 17,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
}
console.log(getMaxDepthOfBinaryTree(head))
console.log('《=========== 华丽的分割线 ============》')
console.log(getMaxDepthOfBinaryTreeByQueue(head))