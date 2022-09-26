/**
 * 田忌赛马
 * 优势牌算法：
 * 给定两个大小相等的数组A和B,A相对于B的优势可以用满足A[i] > B[i]的索引i的数来描述。
 * 返回A的任意排列，使其相对于B的优势最大化
 */

 function getMaxOrder(arr1, arr2) {
  const cloneArr2 = [...arr2]
  arr1.sort((a, b) => a - b)
  cloneArr2.sort((a, b) => a - b)
  const map = {} // 对大于arr2的数进行记录
  const fallback = [] // 暂存无法匹配的
  for(let i = 0; i < cloneArr2.length; i++) {
    if(arr1[i] > cloneArr2[i]) {
      if(!map[cloneArr2[i]]) {
        map[cloneArr2[i]] = []
      }
      map[cloneArr2[i]].push(arr1[i])
    } else {
      fallback.push(arr1[i])
    }
  }
  const res = []
  for(let i = 0; i < cloneArr2.length; i++) {
    if(map[cloneArr2[i]] && map[cloneArr2[i]].length) {
      res[i] = map[cloneArr2[i]].shift()
    }else {
      res[i] = fallback.shift()
    }
  }
  return res
}

// 测试
const arrA = [10, 24, 8, 32]
const arrB = [13, 25, 25, 11]
console.log(getMaxOrder(arrA, arrB))
console.log(arrA.sort())