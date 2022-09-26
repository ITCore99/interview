/**
 * 打家劫舍 
 * 你是一个专业的小偷 计划偷窃沿街的房屋。每间屋内藏有一定的现金 影响你偷窃的唯一因素就是相邻房屋装有相同的防盗系统。如果两间相邻的房屋在同一晚上被小偷闯入
 * 就会触发系统自动报警。
 * 给定一个数组代表每个房屋储藏的金额非负整数数组，计算你在不触动警报的情况下，一夜之内能够偷窃的最高金额数
 * 输入：[1,2,3,1] 输出 4
 * 输入：[2,7,9,3,1] 输出 12
 * 
 * 分析： 我们可以讲题目转化为 在数组中进行挑选一些数值这些数值的下标不能相邻并且使之的和最大
 * 情况1 如果数组中只有一个数字 我们毫无疑问 只能取这个数字
 * 情况2 数组中有两个数字 我们肯定是取数值最大的那个数字
 * 情况3 当数组中有大于等于3个数字时 [1,2,3,...] 对于这个3取与不取 我们取决于两个谁会更大 如果取得话 所能得到值时（i-2）下标+ 3 不取的话 值是 (i-1)下标 所以我们去对比这两个值谁最大
 * 来决定我们到底去不去 并将这个最优的解保存在当前下标位置 依次类推 对于3后面的数字我们取不取仍然是这要去判断 保存最优解 最终我们既可以得到最大的和。由此我们发现每一个数都是依赖i-1位置的
 * 数和i-2位置的数所以我们就很容易想到了递归的思想
 * 
 */

/**
 * 使用递归的方式求解
 * @index 是索引位置上最大的值
 */
function answer1(houses, index) {
  if(!houses) return 0
  if(index === 0) { // 当只有一个值 也就是索引0位置 
    return houses[0]
  }
  if(index === 1) { // 当只有一个值 也就是索引1位置 
    return Math.max(houses[0], houses[1])
  }
  return Math.max(answer1(houses, index-1), answer1(houses, index-2) + houses[index]) // 这里answer1(houses, i-2) + houses[i] 就是如果选择当前i位置那么i-2位置也是必选的 所以当前位置的值就是这个
}

/**
 * 使用动态规划求解
 * 由于以上使用递归 我们发现 Math.max(answer1(houses, index-1), answer1(houses, index-2) + houses[index]) 在这行中我们首选算了index-1之后我又算了index-2 但是index-2
 * 的计算过程中有重复的算了index-1所以这里就会出现重复计算。所以这里我们使用动态规划优化下 缓存之前算过的值
 */
function answer2(houses) {
  if(!houses) return 0
  if(index === 0) { // 当只有一个值 也就是索引0位置 
    return houses[0]
  }
  const dp = [] // 这里我们使用dp数组来存储我们计算过的值 动态规划中非常重要的一个概念 dp数组是几维取决于我们的影响因素 这里我们影响因素只有一个所以这里我们使用一维即可
  dp[0] = houses[0]
  dp[1] = Math.max(houses[0], houses[1])
  for(let i = 2; i < houses.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i])
  }
  return dp[dp.length - 1]
}
// 上面👆🏻我们使用dp保存每一个位置的最优解但是我们发现我们之后放当前i 之前的i-1和i-2所以我们只需要使用两个变量保存就行而非使用将全部的数值保存下来 以节省空间
function answer2Plus(houses) {
  if(!houses) return 0
  if(index === 0) { // 当只有一个值 也就是索引0位置
    return houses[0]
  }
  let prever = houses[0] // 保存 i-2
  let prev =  Math.max(houses[0], houses[1]) // 保存 i-1 
  for(let i = 2; i < houses.length; i++) {
    const temp = prev
    prev = Math.max(prev, prever + houses[i])
    prever = temp
  }
  return prev
}




// 测试
const houses1 = [1,2,3,1]
const houses2 = [2,7,9,3,1]

console.log('=== 测试 asnser1 ===>')
console.log(answer1(houses1, houses1.length - 1))
console.log(answer1(houses2, houses2.length - 1))

console.log('<=== 测试 asnser1 ===')

console.log('=== 测试 asnser2 ===>')
console.log(answer2(houses1, houses1.length - 1))
console.log(answer2(houses2, houses2.length - 1))
console.log(answer2Plus(houses1))
console.log(answer2Plus(houses2))

console.log('<=== 测试 asnser2 ===')