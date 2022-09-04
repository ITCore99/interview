/**
 * 给定一个升序数组numbers 从数组中找出两个数 满足两数之和等于target
 * 注意是有序的数组📢 可以使用双指正 一个左指针 一个右指针
 */

function findTwoNumberIndexSumEquals(nums, target) {
  let low = 0
  let high = nums.length - 1
  for(let i = 0; i < nums.length; i++) {
    const sum = nums[low] + nums[high]
    if (sum === target) {
      return [low, high]
    }else if(sum < target) {
      low++
    } else {
      high--
    }
  }
  return -1
}
// 测试 
const arr = [1, 2, 3, 5, 8, 9]
console.log(findTwoNumberIndexSumEquals(arr, 17))