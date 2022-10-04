/**
 * 二叉树后序遍历 迭代实现
 */

function traverse(tree) {
  const arr  = []
  if(!tree) return arr
  const stack = []
  let prev = null // 用于保存根节点有节点是不是遍历过
  while(stack.length || tree) {
    while(tree) { // 先找到最左节点
      stack.push(tree)
      tree = tree.left
    }
    tree = stack.pop()
    if(!tree.right || tree.right === prev) { // 右节点不存在或者已经遍历过
      arr.push(tree.value) // 进行打印
      prev = tree
      tree = null // 注意放置重复收集 重点
    } else { // 如果存在右边节点
      stack.push(tree)
      tree = tree.right
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

console.log(traverse(tree))