/**
 * 实现一个数组的扁平化函数
 */


const flatten = arr => arr.reduce((prev, curr) => prev.concat(Array.isArray(curr) ?  flatten(curr) : curr),[])

// [1, 2, 3, 4, [5, 6]]
console.log(flatten([1, 2, 3, [4, [5, 6]]]));

// [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3, [4, [5, 6]]], 2));