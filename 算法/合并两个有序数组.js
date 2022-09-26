/**
 * 合并两个有数数组
 * 注意我们在归并中也写了一个 合并有序数组(从头开始开始遍历) 那个是返回一个新数组 而我们本次的理解稍微复杂点(从尾部开始替换) 并且会修改arr1原数组
 */
function mergeOrderlyArr(arr1, arr2) {
  let i = arr1.length - 1
  let j = arr2.length - 1
  let insertIndex =  arr1.length +  arr2.length - 1 // 从最后一个位置开始插入
  while(j >= 0) {
    if(i < 0) { // 说明数组1已经完毕
      arr1[insertIndex--] = arr2[j--]
    } else {
      arr1[insertIndex--] =  arr1[i] > arr2[j] ? arr1[i--] :  arr2[j--]
    }
  }
  return arr1
}

let num1 = [3, 5, 6, 7]
let num2 = [1, 2, 3]
const res = mergeOrderlyArr(num2, num1)
console.log('res', res)