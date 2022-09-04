/**
 * 两个数之和
 * 给定一个整数nums 从数组中找出两个数满足相加之和等于目标数target
 */
function findTwoNumsAddEquals(nums, target) {
  let map = new Map() 
  for(let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if(map.has(diff)) {
      return [map.get(diff), i]
    }
    map.set(nums[i], i)
  }
} 

// 测试
const arr = [1, 2, 3, -1, 8, 9]
console.log(findTwoNumsAddEquals(arr, 0))