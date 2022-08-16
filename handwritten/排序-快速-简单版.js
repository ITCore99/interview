/**
 * 快排的简单版本(阮一锋版本)
 * 核心思路是 通过一个瞄点来进行划分 小于等于在瞄点左侧大于的在瞄点右侧 再对左右两侧再次执行排序递归进行。
 * 这个瞄点的选择是快速排序的关键现在我们只显示简单版本的 最后一个做瞄点。
 * 这样的实现有开辟新空间 left 和 right 但是其实可以用开辟新空间来实现 那就是我们的复杂版原地交换
 * 
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

function quickSort(arr) {
  if(arr.length < 2) return arr
  const pivot = arr[arr.length - 1]
  const left = arr.filter((v, i) => v <= pivot && i !== arr.length -1) // 左侧的需要注意的是排除对本身进行排序
  const right = arr.filter((v, i) => v > pivot)
  return [...quickSort(left),pivot, ...quickSort(right)]
}
console.log('sort after', quickSort(numArr))