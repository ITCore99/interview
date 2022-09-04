/**
 * 整形数组nums, 在数组中找出由三个数字组成的最大乘积，并输出这个乘积
 * 这里会出现几种情况
 * 当全是正数 最大值就是三个最大的数的乘积
 * 当全是负数 类似是最大的乘积也是三个最大数的乘积
 * 当有正有负 则最大值是两个最小的负数相乘再乘以最大正数
 * 由于这三种情况我们不知道哪个最大的所以我们在最后返回三种情况中的最大值即可
 * 解法1：由以上的分析可知我们需要首先要对这个数组进行排排序(这里我们使用快排)
 *       第一种解法 由于其复杂度是有排序数组组成的所以 由于快排是nlogn 复杂度还是有点高 改进思路是如何在不排序的情况找到我们所需要的最值 就是我们的第二种解法
 * 解法2：通过线性扫描来获取我们需要的极值
 */

// 快速排序
function quickSort(nums, start = 0, end = nums.length - 1) {
  if (end - start < 1) return nums
  const pivotIndex = findPivotIndex(nums, start, end) // 这里参考中心点已经排好了顺序 所以左右都不用包含中间点
  quickSort(nums, start, pivotIndex - 1)
  quickSort(nums, pivotIndex + 1, end)
  return nums
}

// 寻找中间点位(中间点位左边小于等于中间点右边大于中间点)
function findPivotIndex(nums, start, end) {
  const pivot = nums[end] 
  let j = start
  for(let i = start; i <= end; i++) {
    if(nums[i] <= pivot) {
      spwan(nums, i, j++)
    }
  }
  return j - 1
}

// 交换函数
function spwan(nums, i, j) {
 [nums[j], nums[i]] = [nums[i], nums[j]]
}

// 获取最大乘积 第一种解法 由于其复杂度是有排序数组组成的所以 由于快排是nlogn 复杂度还是有点高 
function getThreeMaxMultiply(nums) {
  const sortArr = quickSort(nums)
  const l = sortArr.length
  const condition1 = sortArr[l -1] * sortArr[l -2] *  sortArr[l -3] // 情况1是 全正数或者全负数
  const condition2 = sortArr[0] * sortArr[1] *  sortArr[l -1] // 情况2 有正有负
  return Math.max(condition1, condition2)
}

// 通过线性扫描 🐂 🍺 实现复杂度 为o(n)
function getThreeMaxMultiply2(nums) {
  let min1 = Number.MAX_SAFE_INTEGER // 最小
  let min2 = Number.MAX_SAFE_INTEGER // 第二小
  let max1 = Number.MIN_SAFE_INTEGER // 第一大
  let max2 = Number.MIN_SAFE_INTEGER // 第二大
  let max3 = Number.MIN_SAFE_INTEGER // 第三大
  for(let value of nums) {
    if(value < min1) { // 当value小于最小的值时我们进行替换
      min2 = min1 
      min1 = value
    } else if(value < min2) {
      min2 = value
    }
    if(value > max1) {
      max3 = max2
      max2 = max1
      max1 = value
    }else if(value > max2) {
      max3 = max2
      max2 = value
    } else if(value > max3) {
      max3 = value
    }
  }
  const condition1 = max1 * max2 *  max3 // 情况1是 全正数或者全负数
  const condition2 = min1 * min2 *  max1// 情况2 有正有负
  return Math.max(condition1, condition2)
}



// 测试
const arr = [1, 2, 7, 5, 6]
const arr2 = [-1, -2, -7, -5, -6]
const arr3 = [-1, -2, 7, -5, -6]
console.log(quickSort(arr))
console.log(getThreeMaxMultiply(arr))
console.log(getThreeMaxMultiply(arr2))
console.log(getThreeMaxMultiply(arr3))
console.log('分界线----')
console.log(getThreeMaxMultiply2(arr))
console.log(getThreeMaxMultiply2(arr2))
console.log(getThreeMaxMultiply2(arr3))