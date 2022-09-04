/**
 * 归并排序 是一种分而治之的一种思想
 * 将数组从中间分为两部分 再对左右进行递归的排序 等到左右两边有数数组之后 再进行合并
 * 核心是如何对两个有序数组进行合并
 * 
 */

// 生成随机数
function generatorNum(num = 4, min = 0, max = num) {
  const result = []
  for(let i = 0; i < num; i++) {
    result.push(Math.floor(Math.random() * ((max - min) + min)))
  }
  return result
}
const numArr = generatorNum()
console.log('原始数据', numArr)

// 归并排序算法
function mergeSort(arr) {
  if (arr.length < 2) return arr
  const p = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, p))
  console.log('left=>', left)
  const right = mergeSort(arr.slice(p))
  console.log('right=>', left)
  return merge(left, right)
}

// 进行两个有序数组的合并
function merge(source1, source2) {
  let i = 0 // source1的指针
  let j = 0 // source2的指针
  const result = []
  while(i < source1.length && j < source2.length) {
    if (source1[i] < source2[j]) {
      result.push(source1[i])
      i++
    } else {
      result.push(source2[j])
      j++
    }
  }
  // 处理数组多余的数组
  if(i < source1.length) {
    result.push(...source1.slice(i))
  } else {
    result.push(...source2.slice(j))
  }
  return result
}

console.log('排完之后数据', mergeSort(numArr))