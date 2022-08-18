/**
 * 蹦床函数 可以防止递归过于深入而导致 函数的调用堆栈溢出
 * 蹦床函数 控制结构来进行消除堆栈溢出的问题 使用蹦床函数展平调用而不是深层的嵌套调用
 * 
 * 首先看下下面的例子 对一下面的例子是如何修复两个函数使得递归不会进行溢出。一个方法是返回一个函数他包装调用而不是直接调用
 */

// 蹦床函数
function trampoline(f) {
  let result = f()
  while (result && result instanceof Function) {
    result = result() // 如果是函数 就执行该函数 把该函数的结果重新复制给自己
  }
  return result; // 返回while 循环的最终结果
}

function sum(x, y) {
  if (y > 0) {
    return sum.bind(null, x + 1, y - 1);
    // return sum(x + 1, y - 1); // 原始的
  } else {
    return x;
  }
}
console.log(trampoline(sum(1, 100000))) // 100001
// console.log(sum(1, 100000))// 100001