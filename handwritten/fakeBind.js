function f(b) {
  console.log(this.a, b);
}


/**
 *  这是简易的一个bind 函数没要考虑到 bind 返回回来的函数作为构造函数的情况
 * @param {} first 
 * @param  {...any} rest 
 * @returns 
 */
Function.prototype.fakeBind = function(first, ...rest) {
  return (...argsInner) => this.apply(first, rest.concat(argsInner))
}
/**
 * 这里实现一个完整的bind函数
 * 1、可以改变this的指向 返回一个新的函数 返回的函数也可以接受参数
 * 2、new 可以改变返回函数this指向 new的优先级更高
 * 3、返回回来的函数需要保留原函数的属性和方式
 * 
 * @param {*} first 
 * @param  {...any} rest 
 */
Function.prototype.fakeBindPlus = function (context, ...rest) {
  const self = this
  const fbound = function(...newArgs) {
    // 判断是不是被new了 如果被new了 new优先级更高 context 是闭包变量被保留了 所以多次bing的时候this指向首次的对象
    self.apply(this instanceof fbound ? this : context, rest.concat(newArgs))
  }
  // 继承原函数的方法和属性
  fbound.prototype = Object.create(self.prototype)
  return fbound
}

//=> 3, 4
f.fakeBindPlus({ a: 3 }).fakeBindPlus({a: 6666})(4); // bind 函数被多次bind时以第一次绑定的this为准

//=> 3, 10
// f.fakeBindPlus({ a: 3 }, 10)(11);