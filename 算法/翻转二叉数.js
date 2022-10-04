/**
 * 翻转二叉树
 * 
 */
function invertBinaryTree(tree) {
  if(!tree) return null
  invertBinaryTree(tree.left) 
  invertBinaryTree(tree.right)
  const temp = tree.left
  tree.left = tree.right
  tree.right = temp
  return tree
}

// 测试

// 测试
const head = {
  value: 4,
  left: {
    value: 2,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 3,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 9,
      left: null,
      right: null
    }
  }
}
console.log(invertBinaryTree(head))