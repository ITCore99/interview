/**
 * 冒泡排序
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

// 冒泡排序
function sortByBubble(arr) {
  const len = arr.length
  for(let i = 0; i < len; i++) { // 第一次遍历是把第一个元素排好序 这个循环只是用来控制次数
    for(let j = 0; j < len - i; j++) { // 这个循环才是排序交换
      if(arr[j] > arr[j+1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

// 交换函数
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
console.log('sort after', sortByBubble(numArr))