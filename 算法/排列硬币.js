/**
 * 总共有n枚硬币 将他们摆放成一个梯形形状 第K行 就必须有K 枚硬币。
 * 给出一个数字n 求出可形成完整阶梯数的总行数
 * n 是一个非负整数且在32为有效数字的整数范围内
 * 
 * 注意: 这里我们有两种解法
 * 1、第一种就遍历 判断n减去i行之前的硬币是否大于i 如果小于i 说明是i行排不满 完整的行数就是i-1 o(n)
 * 2、由于n枚硬币必然排的行数在1-n之间且1-n是递增的 那么我们要找出其中的一个数我们就很自然的想到了使用二分查找 o(log(n))
 */

// 解法1 我们使用便利的方式
function answerBytraverse(n) {
  for(let i = 1; i <= n; i++) {
    n = n - i
    if(n <= i ) {
      return i
    }
  }
}

// 第二种解法使用 二分查找

function answerByBinarySearch(n) {
  let low = 1
  let hight = n
  let sum = 0
  while(low <= hight) {
    let mid = low + Math.floor((hight - low) / 2) 
    if(getRowNeedCount(mid) === n) {
      return mid
    } else if(getRowNeedCount(mid) < n) {
      low = mid + 1
    } else {
      hight = mid - 1
    }
  }
  return hight
}
// 获取行数所需要的银币
function getRowNeedCount(n) { // 注意这里的n行 总共耗费硬币数是 1+2+3+4.....n 是一个等差数列求和 n(n+1)/2
  // let sum = 0
  // for(let i =1; i <= n; i++) {
  //   sum += i
  // }
  // return sum
  return (n*n + n) / 2
}
  
// 测试
console.log(answerBytraverse(3))
console.log(answerBytraverse(10))
console.log(answerBytraverse(12))

console.log('===华丽的分割线====')

console.log(answerByBinarySearch(3))
console.log(answerByBinarySearch(10))
console.log(answerByBinarySearch(12))
console.log(answerByBinarySearch(14))
console.log(answerByBinarySearch(15))