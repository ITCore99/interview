/**
 * 使用贪心算法 
 * 获取数组中最长递增子序列最长子序列及其长度
 */

// 获取最长递增子序列长度
function getLongestSubsequene(arr) {
 let maxLen = 0    // 记录最大长度
 let start = 0     // 记录递增子序列开始的索引
 let maxEnd = 1    // 最长结束位置
 let maxStart = 0  // 最长的开始位置
 for(let i = 1; i < arr.length; i++) { 
  if(arr[i-1] >= arr[i]) { // 出现不是递增 重置递增开始索引
    start = i
  }
  if(i - start + 1 > maxLen) { // 超过最大长度了进行更新
    maxEnd = i
    maxStart = start
    maxLen =  i - start + 1 
  }
 } 
 return {
  len: maxLen,
  maxI,
  maxStart,
  sub: arr.slice(maxStart, maxEnd + 1)
}
}
// 测试
const arr = [1, 2, 3, 2, 3, 4, 3, 4, 5, 6, 7, 5, 6, 7, 8]
console.log(getLongestSubsequene(arr))