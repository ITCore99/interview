/**
 * 二叉树的中序遍历 - 使用迭代的方法
 */

function middleTrvaser(tree) {
  const arr = []
  if(!tree) return arr
  const stack = []
  while(stack.length || tree) {
    if(tree) {
      stack.push(tree)
      tree = tree.left
    } else { // 说明左边的节点已经找完了 需要进行出栈
      const node = stack.pop()
      arr.push(node.value)
      tree = node.right
    }
  }
  return arr
}

// 测试
const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: {
        value: 6,
        left: null,
        right: null
      },
      right: {
        value: 7,
        left: null,
        right: null
      }
    }
  },
  right: {
    value: 3,
    left: null,
    right: null
  }
}

console.log(middleTrvaser(tree))