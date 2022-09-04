/**
 * 斐波拉契数列的三种实现方式
 */

// 原始的 这种从在大量的重复计算
function fibonacci(n) {
  if(n === 0) return 0
  if(n === 1) return 1
  return fibonacci(n-1) + fibonacci(n-2)
}

// 由于我们只需要知道前当前数的前两个数字所以 我们使用数组保存
function fibonacci2(n) {
  const arr = [0, 1]
  for(let i = 2; i <= n; i++) {
    sum = arr[0] + arr[1]
    arr[0] = arr[1]
    arr[1] = sum
  }
  return arr[1]
}
function fibonacci2Plus(n) { // 由于fibonacci2版本中我们 我们使用数组相当于开辟的新堆空间 我们可以使用变量来代替数组 使得空间复杂度为o(1)
  if(n === 0) return n
  if(n === 1) return 1 
  let prev1 = 0
  let prev2 = 1
  for(let i = 2; i <= n; i++) {
    sum = prev1 + prev2
    prev1 = prev2
    prev2 = sum
  }
  return prev2
}
// 使用更加简练的递归
function fibonacci3(n, a = 0, c = 1) {
  if(n <= 1) return c
  return fibonacci3(n - 1, c,  a+c )
}
// 测试
console.log(fibonacci2(5))
console.log(fibonacci2Plus(5))
console.log(fibonacci(5))
console.log(fibonacci3(5))

