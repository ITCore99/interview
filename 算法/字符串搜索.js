/**
 * 字符串搜索 indexof 的原理
 * 给定两个字符串 A，B 判断B在A中是否存在，存在返回A的下标，不存在返回-1
 * 例如:
 * A: ABCABCAABCABCD
 * B: ABCABCD
 */

/**
 * 解法1 暴力破解法 时间复杂度 o(n*m) 不太推荐 复杂度太高
 * 通过字符逐个的匹配 出现不相同的则进行 往后移动一位在进行匹配依次进行类推
 * @param taregt 目标搜索字符串
 * @param source  原始字符串
 */

function answer1(taregt, source) {
  const sLen = source.length
  const tLen = taregt.length
  if(tLen > sLen) return -1
  for(let s = 0; s <= sLen - tLen; s++) {
    let flage = true
    for(let t = 0; t < taregt.length; t++) {
      if(taregt[t] !== source[s + t]) {
        flage = false
        break
      }
    }
    if(flage) return s
  }
  return -1
}

/**
 * 第二种 使用过先求需要对应字符串求 hash 值如果 hash 值不相同的则不用再进遍历逐个对比 这样可以减少对比次数
 * 这里我们不使用什么 hash 值而是使用数字对字母进行标识使其具有唯一性就行
 * @param {*} taregt 
 * @param {*} source 
 */

function answer2(taregt, source) {
  const sLen = source.length
  const tLen = taregt.length
  const letterHashMap = createHashLetterMap()
  let taregtHashSum = 0
  let tempSum = 0
  for(let t = 0; t < tLen ; t++) { // 先求出对比字符串的hash值
    taregtHashSum += letterHashMap[taregt[t]]
    tempSum +=  letterHashMap[source[t]]
  }
  console.log('taregtHashSum', taregtHashSum, 'tempSum', tempSum)
  for(let s = 0; s <= sLen - tLen; s++) {
    if(tempSum !== taregtHashSum) { // 不相等直接移动到下一位
      tempSum = tempSum - letterHashMap[source[s]] + letterHashMap[source[s+ tLen]]
      console.log('tempSum', tempSum)
      continue
    } else { // 其实这里简化为直接是两个字符串对比 使用字符串默认对比规则
      const tempStr = source.slice(s, s + tLen)
      console.log(555, tempStr)
      let flage = true
      for(let i = 0; i < tempStr.length; i++) {
        if(tempStr[i] !== taregt[i]) {
          flage = false
          break
        }
      }
      if(flage) return s
    }
  }
  return -1
}

/**
 * 创建一个字母的hash值
 * @returns 
 */
function createHashLetterMap() {
  const letters = 'ABCDEFGHIGKLMNOPQESTUVWXYZ'
  const map = {}
  for(let i = 0; i < letters.length; i++) {
    map[letters[i]] = i
  }
  return map
}

/**
 * 最高效的算法是KMP 算法 使用 此算法可以进行 更加快速高效的移动子字符串 
 * 但是但是 .... 目前还没理解o(╥﹏╥)o 所以暂时保留 后面补齐
 * TODO: 待补齐
 */

function answerByKMP() {

}

// 测试
const source = 'ABCABCAABCABCD'
const taregt = 'ABCABCD'
console.log(answer1(taregt, source))
console.log(answer2(taregt, source))