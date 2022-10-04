/**
 * 给定一个二叉树，判断他是不是高度平衡的二叉树
 * 所谓高度平衡指的是 一个二叉树每个节点的左右两个子树的高度差的绝对值不超过1
 */

/**
 * 判断是不是平衡二叉树
 */
function isBalanceBinaryTree(tree) {
  if(!root) return true
  return helper(tree) !== -1
}
function helper(root) {
  if(root === null) {
    return 0
  }
  let left = helper(root.left)
  let right = helper(root.right)
  if(left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1
  }
  return Math.max(left, right) + 1
}