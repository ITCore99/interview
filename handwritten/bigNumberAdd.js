/**
 * 这是一个大数相加函数
 */
function binNumberAdd(num1, num2) {
  debugger
  num1 += ''
  num2 += ''
  const len1 = num1.length 
  const len2 = num2.length 
  const len = Math.max(len1, len2)
  len > len1 ? num1 = num1.padStart(len, '0') : num2 = num2.padStart(len, '0')
  let carry = 0
  let n = len -1
  let res = ''
  while(n >= 0) {
    const per = Number(num1[n]) + Number(num2[n]) + carry // 从末尾开始相加
    carry = per > 9 ? 1 : 0  // 判断需不需要进位
    res = (per % 10) + res 
    n--
  }
  return carry ? carry + res : res
}

// 测试
const num1 = 11111
const num2 = 2222

console.log(binNumberAdd(num1, num2))
const num3 = 11111
const num4 = 1978299

console.log(binNumberAdd(num3, num4))

const num5 = 1
const num6 = 2

console.log(binNumberAdd(num5, num6))