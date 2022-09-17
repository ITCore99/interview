/**
 * 获取二叉树最小深度 广度优先的方法
 * 思路: 我们从根节点开始认为根节点的深度为1 我们需要为每一个节点维护一个深度的属性记录当前节点的深度 子孩子的节点深度等于父节点+1
 * 由于我们使用的广度遍历 先遍历左孩子再遍历右孩子 所以只要我们找到无论是左孩子还是右孩子是叶子节点就返回当前节点深度 就是最小深度
 * 具体实现如下: 
 * 时间复杂度 极端情况下 每个节点都讲遍历一次 所以为o(n)
 */

function getMinDepthOfBinaryByGuangDu(tree) {
  if(!tree) return null
  tree.deepth = 1 // 设置根节点深度为 1
  const queue = [tree]  // 创建一个队列 进行广度遍历
  while(queue.length) {
    const node = queue.shift()
    if(!node.left && !node.right) { // 找到当前节点就是叶子节点 直接返回
      return node.deepth
    }
    if(node.left) { // 存在叶子节点 进行入队
      node.left.deepth = node.deepth + 1 // 更新节点的深度
      queue.push(node.left)
    }
    if(node.right) {
      node.right.deepth = node.deepth + 1 // 更新节点
      queue.push(node.right)
    }
  }
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
      left: null,
      right: null
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: {
        value: 7,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  }
}

console.log(getMinDepthOfBinaryByGuangDu(tree))