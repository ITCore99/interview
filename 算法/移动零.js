/**
 * 给定一组数字nums 编写一个函数将所有的零都移动到数组的末尾
 * 
 * 解法: 我们使用双指针进行实现j指正指向不为0的位置遍历当遇到i位置不为0的时候i位的数字和j位的数字进行交换。遍历结束之后再j位置之后的位置使用0进行填充
 */
function moveZero(nums) {
  let j = 0 // 指正指向不为0的位置
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      nums[j] = nums[i]  
      j++ // 说明这个位置已经填充完了 j移动到下一位
    }
  }
  for(let k = j; k < nums.length; k++) { // 对后面的位数进行填充
    nums[k] = 0
  }
  return nums
}

// 测试
const nums = [0, 1, 0, 3, 12]
console.log(moveZero(nums))