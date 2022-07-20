/**
 * bind 函数多次调用会已第一次绑定的 this 为准，softbind 已最后一次绑定传入的 this 为准；
 */
Function.prototype.softBind = function(obj, ...rest) {
  const fn = this
  const bound = function(...args) {
    const o = !this || this === (window || global) ? obj : this
    return fn.apply(o, [...rest, ...args])
  }

  bound.prototype = Object.create(fn.prototype)
  return bound
}

function foo() {
  console.log(this.name)
}

let obj = {name: "obj"};
let obj2 = {name: "obj2"};
let obj3 = {name: "obj3"};

let fooBJ = foo.softBind(obj);
fooBJ();  // name: obj   这个时候软绑定已经生效了，this绑定到obj上
obj2.foo = foo.softBind(obj);
obj2.foo(); //name: obj2   这里已经的this隐式绑定到obj2上了
fooBJ.call(obj3); // name: obj3  这里this被硬绑定到obj3上了
setTimeout(obj2.foo, 100); // name: obj  软绑定了最初的obj