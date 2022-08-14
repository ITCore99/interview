/**
 * 实现一个洗牌算法 
 * 当然最简单的实现方式是使用math.random() 配合 sort函数来进行实现 但是我们换一种实现的思路
 * 实现洗牌算法的
 * 1.在第N项数字和前N项数字随机选一互换
 * 2、在N-1项之前和前N-1项数字所及选-互换
 * ... 
 * 一次类推
 */
function shuffle(list = []) {
  const result = [...list]
  for(let i = list.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    [result[i], result[swapIndex] ] = [result[swapIndex], result[i]]
  }
  return result
}

// 打乱数组，有可能是 [1, 3, 2, 4]，但对原数组没有影响
console.log('shuffle', shuffle([1, 2, 3, 4]))
console.log('shuffle', shuffle([1, 2, 3, 4]))
console.log('shuffle', shuffle([1, 2, 3, 4]))
console.log('shuffle', shuffle([1, 2, 3, 4]))
console.log('shuffle', shuffle([1, 2, 3, 4]))