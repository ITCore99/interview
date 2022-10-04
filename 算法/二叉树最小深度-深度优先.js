/**
 * 这里是获取二叉树最小深度 使用深度优先
 * 思路：
 * 我们认为所有叶子节点的深度为1 父节点的最小深度就是 父节点左右节点最小深度+1 
 * 进行递归不断地算出每一节点的最小节点 这样回溯回去我们就知道父节点的最小深度
 * 时间复杂度 极端情况下 每个节点都讲遍历一次 所以为o(n)
 */

 function getBinaryTreeMinDepthByDeep(tree) {
  if(tree === null) return 0
  if(!tree.left && !tree.right) return 1  // 这是根节点 我们默认根节点的深度为1
  let min = Number.MAX_SAFE_INTEGER   // 定义一个变量用与保存当前节点左右孩子中最小的深度
  if(tree.left) { // 如果存在左孩子 则递归的去调用查询左孩子的最小高度
    min = Math.min(min, getBinaryTreeMinDepthByDeep(tree.left)) 
  }
  if(tree.right) {
    min = Math.min(min, getBinaryTreeMinDepthByDeep(tree.right))
  }
  return min + 1 // 当前节点的最小高度是 最小子节点高度+1
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

console.log(getBinaryTreeMinDepthByDeep(tree))