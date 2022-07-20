/**
 * 给定一个 Uint8Array 数组，请写一个函数 concat(arrays)，将数组拼接成一个单一数组并返回。
 */
function concat(arrays) {
  const totalLength = arrays.reduce((prev, current) => prev += current.length, 0)
  let result = new Uint8Array(totalLength)
  if(!arrays.length) return result
  let len = 0
  for(let array of arrays) {
    result.set(array, len)
    len += array.length
  } 
  return result
}

// 测试
let chunks = [
  new Uint8Array([0, 1, 2]),
  new Uint8Array([3, 4, 5]),
  new Uint8Array([6, 7, 8])
];
const result = concat(chunks)
console.log('result=>', result)