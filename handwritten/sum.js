/**
 * sum(1, 2, 3).valueOf(); //6
 * sum(2, 3)(2).valueOf(); //7
 * sum(1)(2)(3)(4).valueOf(); //10
 * sum(2)(4, 1)(2).valueOf(); //9
 * sum(1)(2)(3)(4)(5)(6).valueOf(); // 21
 */

function sum(...outerArgs) {
  const inner = (...innerArags) => {
    outerArgs = outerArgs.concat(innerArags)
    return inner
  }
  inner.valueOf = () => outerArgs.reduce((prev, curr) => prev+ curr, 0)
  inner.toString = () => outerArgs.reduce((prev, curr) => prev+ curr, 0)
  return inner
}
// console.log(sum(1, 2, 3).valueOf())
// console.log(sum(2, 3)(2).valueOf())
// console.log(sum(1)(2)(3)(4).valueOf())
// console.log(sum(2)(4, 1)(2).valueOf())
// console.log(sum(1)(2)(3)(4)(5)(6).valueOf())

//=> 15
console.log(sum(1, 2, 3) + sum(4, 5))

//=> 100
// console.log(sum(10) * sum(10))

function sum2(...args) {
  const f = (...rest) => sum2(...args, ...rest)
  f.valueOf = () => args.reduce((x, y) => x + y, 0);
  return f
}
console.log(sum2(2, 3)(2).valueOf())
console.log(sum2(1, 2, 3) + sum2(4, 5))
