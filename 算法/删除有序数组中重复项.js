/**
 * 删除有序数组的重复项
 * 有一个有序数组nums 原地删除重复元素使得每个元素只出现一次 返回删除后数组的新长度
 * 例如: [0,1,2,2,3,3,4]
 * 返回为 5
 */
function delArrayRepeatItem(arr) {
  if(!arr.length) return
  let i  = 0; // 这是个慢指针 j 可以认为是快指针
  for(let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j] // 每次不相等就进行移动
    }
  }
  return i + 1 // 因为是需要是len 所以下标需要加1
}

// 测试
const arr = [0,1,2,2,3,3,4]
const arr2 = [1,1,2,2,3,3,4]
console.log('arr=>', delArrayRepeatItem(arr))
console.log('arr=>', delArrayRepeatItem(arr2))

