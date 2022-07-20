const add10 = (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100;

function compose2(...fns) {
  console.log('fns', fns[0]) 
  return fns.reduce((prev, curr) => (...arg) => prev(curr(arg))) // 注意一定注意这里 不能写成 fns.reduce((a,b) => a(b)) 这样写a(b) a函数会立即执行
}

// function compose(...fns) {
//   return fns.reduce((a, b) => (...args) => a(b(...args)));
// }
// (10 + 100) * 10 + 10 = 1110
const res = compose2(add10, mul10, add100)(10)
console.log('res', res)