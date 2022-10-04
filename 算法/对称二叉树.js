/**
 * 对称二叉树
 * 给定一个二叉树 检查他是否是镜像对称
 * 例如：二叉树[1, 2, 2, 3, 4, 4, 3] 先这种中间划线堆成就是对称二叉树
 *          1
 *        2   2
 *      3  4 4  3
 * 解法:
 * 发现如果是对称二叉树的左子树的左孩子等于右子树右孩子 左孩子的右孩子等于右孩子的左孩子
 */

/**
 * 是否是对称二叉树(递归)
 */
function isSymmetricBinaryTree1(tree) {
  if(!tree) return true
  return helper(tree.left, tree.right)

}
function helper(leftTree, rightTree) {
  // 递归的终止条件是两个节点都为空
  if(leftTree === null && rightTree === null) {
    return true
  }
  if(leftTree === null || rightTree === null) { // 两个节点中的任意一个为null 
    return false
  }
  if(leftTree.value !== rightTree.value) {
    return false
  }
  return helper(leftTree.left, rightTree.right) && helper(leftTree.right, rightTree.left) // 判断
}


/**
 * 是否是对称二叉树(遍历的方式)
 * 每次我们左右节点都如果 每次将两个节点出栈对比
 */
function isSymmetricBinaryTree2(tree) {
  if(!tree) return true
  if(tree.left === null && tree.right === null) return true
  const queue = []
  queue.push(tree.left)
  queue.push(tree.right)
  while(queue.length) {
    const l = queue.shift()
    const r = queue.shift()
    if(l === null && r === null) {
      continue
    }
    if(l === null || r === null) {
      return false
    }
    if(l.value !== r.value) {
      return false
    }
    // 进行下一轮比较 
    queue.push(l.left) 
    queue.push(r.right)

    queue.push(l.right)
    queue.push(r.left)
  }
  return true
}

// 测试
const head = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 3,
      left: null,
      right: null
    }
  }
}
console.log(isSymmetricBinaryTree1(head))
console.log('《=========== 华丽的分割线 ============》')
console.log(isSymmetricBinaryTree1(head))