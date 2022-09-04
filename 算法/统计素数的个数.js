/**
 * 素数的数学概念就是 只能被1和本身整数的自然数 0 1除外
 * 这里我们会使用两种方法进行来求解：
 * 1、暴力排解发: 就是通过双层for循环进行暴力的查找
 * 2、埃筛法: 这才是这道题目重点考察的 他主要的依据是一个素数和另一个数的乘积必然是一个合数。
 * 所以将目标数生成个数组长度n的数组全部标识为素数 在找到一个素数后乘上其他自然数将概述表示为非素数当遍历的这个数的话就可以直跳过不用再去判断这个数 写法如下
 */

/**
 * 解法1 暴力方法
 * @param {*} n 
 */
function findPrime1(n) {
  let count = 0   // 统计个数
  for(let i = 2; i <n ; i++) {
    count += isPrime(i) ? 1 : 0
  }
  return count
}
// 判断是不是素数 
function isPrime(n) {
  for(i = 2; i <= n - 1; i++) { // 比如是n=12 需要判断 2*6 3*4 4*3 6*2 其实前面判断后面就不用判断了所以应该是从根号12为分界点 i < 根号12 即 i < Math.sqrt(n)
    if(n % i === 0) return false
  }
  return true
}

/**
 * 
 * @param {*} n 
 */
function findPrime2(n) {
let count = 0
 const isPrimeArr = new Array(n).fill(true) // 先默认全是素数 因为2肯定是素数所以2的第一循环标识出2为因子的合数
 for(let i = 2; i <= n; i++) {
  if(isPrimeArr[i]) { // 是素数
    count++
    for(let j = i * i; j < n; j +=i) { // 每次加自己 就类似于 第一遍2*2 第二遍 2*3 第三 2*4 当为3的时候 3 *2 3*3 ... 当为4的时候 4*2 4*3 ....我们返现 2*3 和 3*2  2*4 和 4*2重复了
      isPrimeArr[j] = false            // 所以我们的 j 应该存 i* i开始
    }
  }
 }
 return count
}

// 测试
console.log(findPrime1(100))
console.log(findPrime1(10))
console.log(findPrime2(100))
console.log(findPrime2(10))
