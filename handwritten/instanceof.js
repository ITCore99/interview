/**
 * instanceOf 
 * 原理就是在实例的原型连上寻找是否有右侧函数的原型
 */

/**
 * 使用递归的方法
 */
function customInstanceOf(instance, Func) {
  if(!(typeof instance  === 'object' &&  typeof Func  === 'function')) return false
  let proto = Object.getPrototypeOf(instance)
  if (Func.prototype === proto) return true
  else return customInstanceOf(proto, Func)
}

/**
 * 使用遍历方法
 */

function customInstanceOf2(instance, Func) {
  if(!(typeof instance  === 'object' &&  typeof Func  === 'function')) return false
  let proto = instance.__proto__
  while(proto) {
    if(proto === Func.prototype) return true
    else proto = proto.__proto__
  }
  return false
}


// 测试
function A() {

}
function B() {}
const a = new A()
console.log(customInstanceOf2(a, A))