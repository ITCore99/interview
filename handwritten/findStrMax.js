/**
 * 找到字符串最大的字符和数量 且复杂度为o(n)
 * @param {*} str 
 * @returns 
 */
function test(str) {
  let map = {}
  let max = 1;
  let letter = str[0]
  for(let i = 0; i < str.length; i++) {
    let l = str[i]
    if(map[l]) {
      map[l] += 1 
    } else {
      map[l] = 1
    }
    if(l === letter) max++
    else  {
      if(max > map[l]) {
        letter = l
        max = map[l]
      }
    }
  }
  return [letter, max, map]
}
const str = 'ababb'
console.log(test(str))