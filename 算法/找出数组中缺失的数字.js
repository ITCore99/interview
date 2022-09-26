/**
 * 找出数组中缺失的数字
 * 给定一个含有n给整数的数组nums，其中nums[i]在区间[1, n]内请找出所以[1, n]范围内但没有出现在数组中的数字，并数组的形式返回结果
 * 进阶:
 * 需要在不适用额外空间且复杂度为O(n)解决问题
 * 解法1: 能最直接想到方法是遍历数组并用一个map去记录那些值出现过哪些值没有出现过 但是由于题目要求不能使用额外空间所以这种方法就不用再考虑范围内了
 * 解法2: 在不使用额为空间下我们应该如何去标识哪些数字已经出现过哪些数字未出现过。由于我们的数字1-n之间的数字，所以我们肯定是可以通过下标来进行找到的，所以
 * 遍历数组找出每一个数字在1-n之间的下标，然后将nums中这个下标中的数+n。遍历过后数组中存在小于n的下标对应的1-n之间下标中的数字就是在nums中未出现的数字
 */
function getVanishNumber(nums)  {
  const len = nums.length
  for(let i = 0; i < len; i++) {
    const index = (nums[i] - 1) % len  // 找出下标 这里取余的目的是 可能遍历到的数字再前面遍历的过程中已经加过n 
    nums[index] += len
  }
  const list = [] // 保存未出现过的数字
  for(let j = 0; j < len; j++) {
    if(nums[j] <= len) {
      list.push(j+1)
    }
  }
  return list
}

// 测试
const nums = [4,3,2,7,8,2,3,1]
console.log(getVanishNumber(nums))