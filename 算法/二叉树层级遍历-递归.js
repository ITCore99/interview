/**
 * 二叉树层级遍历(前序遍历)
 * 层级遍历就是一层一层的进行打印 之前都是通过借助队列的方法来实现的
 * 这里我们使用递归的方法来进行实现下
 *          1               // 2的0次方
 *      2       3           // 2的1次方
 *   4    5   6    7        // 2的2次方 
 * 由上图如果对于一个满二叉树我们 发现二叉树的每层元素格式2n次方 n为层数 接着我们发现 如果我们将 1放到数组索引为1的位置 左孩子2在2位置 右孩子3在3位置 类似 4在4 5在5
 * 不难发现 左孩子在数组中索引是2i 右孩子是2i+1 i是父节点在数组中位置。
 * 所以我们可以使用这个规律 进行递归遍历的时候将每一个节点放到合适的位置
 */

/**
 * 
 * @param {*} tree 
 * @param {*} i     // 当前节点在数组中的索引
 * @param {*} arr   //  存放节点数组
 */
  function traverseGuangDuByDiGui(tree, i = 1, arr = []) {
  if(!tree) return 
  arr[i] = tree.value // 放置当前节点
  traverseGuangDuByDiGui(tree.left, 2 * i, arr) // 递归遍历左节点 计算节点数组索引
  traverseGuangDuByDiGui(tree.right, 2 * i + 1, arr) //递归遍历有节点 计算节点数组索引
  return arr.filter(num => !!num).toString()
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

console.log(traverseGuangDuByDiGui(tree))