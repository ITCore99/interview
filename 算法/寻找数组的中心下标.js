/**
 * 寻找数组的中心下标
 * 给定一个整数数组nums，请编写一个能够返回数据中心下标的方法
 * 中心下标: 就是数组的一个下标 其左侧的元素相加等于右侧的元素相加。如果不存在这个下标则为返回为-1 如果数组存在多个中心下标则返回最靠左边那个下标
 * 注意：数组的中心下标可能出现在队首或者队尾
 * 我们实现的思路是 首先我们求出数组的总数之和为sum 然后我们定义一个变量total 初始值为0 并且开始存数组的开始遍历数组使用total对数组项进行累加 进行total和sum
 * 进行对比相等 如果相等就返回数组下标i 具体的实现如下代码所示
 */

// 获取数组的中心下标
function findCenterIndexInArray(nums) {
  let total = 0
  let sum = nums.reduce((p,c) => p += c, 0)
  for(let i = 0, len = nums.length; i < len; i++) {
    total += nums[i]
    if(total === sum) {
      return i
    }
    sum -= nums[i]
  }
}

// 测试 
const arr = [1, 7, 3, 6, 5, 6]
console.log(findCenterIndexInArray(arr))