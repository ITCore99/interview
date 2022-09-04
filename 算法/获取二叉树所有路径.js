/**
 * 获取二叉树所有路径
 */

// 第一种实现 递归的实现
function getBinaryTreeAllPath(tree) {
 const paths = []
 function helper(node, path) {
  path.push(node.value)
  if(!node.left && !node.right) { // 到了叶子节点
    paths.push(path)
    return 
  }
  if(node.left) {
    helper(node.left, [...path])
  }
  if(node.right) {
    helper(node.right, [...path])
  }
 }
 helper(tree, [])
 return paths
}

// 第二种 实现stack
function getBinaryTreeAllPathByStack(tree) {
  const paths = []
  const stack = [] // stack 用来保存调用顺序  如果不用递归的话 我们需要自己模拟实现调用栈 (利用是深度优先)
  const rightTreeValue = [] // 保存右子树是否被遍历过
  while(stack.length || tree) {
    while(tree) { // 每次先把左子树全部
      stack.push(tree)
      tree = tree.left
    }
    const node = stack[stack.length - 1] // 获取栈顶元素
    if(node.right && !rightTreeValue.includes(node.right)) { // !rightTreeValue.includes(tree.right) 主要是判断是不是左右孩子都走过来 走过来 需要父节点出栈
      tree = node.right
      rightTreeValue.push(node.right)
    } else {
      if(!node.left && !node.right) { //  到达了根节点
        const path = stack.map(item => item.value)
        paths.push(path)
      }
      stack.pop() // 执行出栈操作
    }
  }
  return paths
}

// 测试
const tree = {
  value: '1',
  left: {
    value: '1-1',
    left: {
      value: '1-1-1'
    },
    right: {
      value: '1-1-2'
    }
  },
  right: {
    value: '1-2',
    left: {
      value: '1-2-1',
      left: {
        value: '1-2-1-1',
        left: {
          value: '1-2-1-1-1'
        }
      }
    }
  }
}
console.log('4444=>', getBinaryTreeAllPath(tree))
console.log('4444=>', getBinaryTreeAllPathByStack(tree))
