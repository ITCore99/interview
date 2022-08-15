/**
 * 如果代码编写正确，则可继续深入：
 * 如果只出现一次，不编码数字，如 aaab -> a3b
 * 如果只出现两次，不进行编码，如 aabbb -> aab3
 * 如果进行解码数字冲突如何解决
 */


function encode(str) {
  let letterArr = [...str].reduce((prev, curr) => {
    const len = prev.length - 1
    const lastLetter = len > -1 ? prev[len][0] : undefined
    if(lastLetter !== curr) {
      prev.push([curr, 1])
    } else {
      prev[len][1] += 1
    }
    return prev
  }, [])
  const res = letterArr
    .map(item => {
      if(item[1] === 1) item[1] = ''
      return item.join('')
    }).join('')
  return res
}

//=> a4b3c2
console.log(encode("aaaabbbcc"))

//=> a4b3a4
console.log(encode("aaaabbbaaaa"))

//=> a2b2c2
console.log(encode("abccddd"))