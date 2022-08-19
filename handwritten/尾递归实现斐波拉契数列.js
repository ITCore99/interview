/**
 * 斐波拉契数列
 * 
 */
// 原始的写法 
function fibonacci(n) {
  if(n < 3) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(5))
console.log(fibonacci(50))

/**
 * 原始的方法存在的问题
 * f(5) = f(4) + f(3)
 * f(4) = f(3) + f(2)
 * 由上面可见f(3) 是存在重复计算的
 * 如果数据量大 计算时间台太长 需要使用尾调用尾递归进行优化
 */

function fibonacciOptimize(n, c1 = 1, c2 = 1) {
  if(n === 1) return c2
  return fibonacciOptimize(n - 1, c2, c1 + c2)
}

console.log(fibonacciOptimize(100))

/**
 * 类似的还有 阶乘函数
 */

// 原始阶乘函数
function factoial(n) {
  if(n == 1) return 1
  return n * factoial(n - 1)
}
console.log('阶乘', factoial(10))
console.log('阶乘', factoial(1000)) // Maximum stack

'use strict'
function factorialOptimized(n, total = 1) {
  if(n === 1) return total
  return factorialOptimized(n - 1, n * total)
}

console.log('阶乘', factorialOptimized(1000))

/**
 * 类似的还有 累加函数
 */
 function sumOptimized(n, total = 1) {
  if(n === 1) return total
  return sumOptimized(n - 1, n + total)
}
console.log('累加', sumOptimized(1000))