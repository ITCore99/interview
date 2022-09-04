/**
 * 求 x 的平方根 (肯定是1 - x-1之间)
 * 在不使用sqrt(x)函数的情况下 等到x的平方根的整数部分
 * 考察二分查找 和 牛顿迭代
 * 寻找平方根的思路是 找到一个数的平方等于小于x这个数的下一个的平方大于那么这个数就是x的平方根 
 */


function binarySearch(x) {
  let index = -1 //  表示索引平方根的
  let l = 0
  let r = x - 1
  while(l <= r) {
    const mid = l +  Number.parseInt((r - l) /2)
    if (mid * mid <= x) { // 从左侧无线的逼近
      index = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return index
}

// 测试 
console.log(binarySearch(25))
console.log(binarySearch(24))