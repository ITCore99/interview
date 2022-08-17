/**
 * 快速排序 进阶版 原地交换
 */
// 生成随机数
function generatorNum(num = 100, min = 0, max = num) {
  const result = []
  for(let i = 0; i < num; i++) {
    result.push(Math.floor(Math.random() * ((max - min) + min)))
  }
  return result
}
const numArr = generatorNum()

// 交换函数
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 用于将数组分隔开且获取到分割点索引
function partition(array, start, end) {
  const povit = array[end] // 仍然已最后一位为参考点
  let j = start 
  for(let i = start; i <= end; i++) {
    if(array[i] <= povit) {
      swap(array, i, j++)
    }
  }
  return j - 1
}


function quickSort(array, start = 0, end = array.length - 1) {
  if (end - start < 1) return array // 开始也结束指向同一个元素
  const povitIndex = partition(array, start, end)
  quickSort(array, start, povitIndex - 1)
  quickSort(array, povitIndex + 1, end)
  return array
}

console.log(quickSort(numArr))