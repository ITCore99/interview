/**
 * 插入排序
 * 如果数组本来是倒序需要移动很多次
 */

 const utils = {
  swap(array, a, b) {
    [array[a], array[b]] = [array[b], array[a]]
  },
  randomNum() {
    return Math.floor(Math.random() * 100)
  },
  randomArray() {
    return Array.from(Array(this.randomNum()), _ => this.randomNum())
  }
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i // 这就是已排完序的索引
    let target = array[j] // 待排序数当前索引
    while(j > 0 && array[j-1] > target) {
      array[j] = array[j-1] // 如果是向前插入 后面已经排好序的元素需要全部往后移动
      j--
    }
    array[j] = target
  }
  return array
}
let array = utils.randomArray()
console.log(insertionSort(array))