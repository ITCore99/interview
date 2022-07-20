const obj = {
  re: /hello/m,
  f: function(a,b) {return a+b},
  date: new Date(),
  map: new Map(),
  list: [1, 2, 3],
  a: 3,
  b: 4,
};

const map = new Map();
map.set('key', 'value');
map.set('ConardLi', 'code秘密花园');

const set = new Set();
set.add('ConardLi');
set.add('code秘密花园');

const target = {
    // field1: 1,
    // field2: undefined,
    // field3: {
    //     child: 'child'
    // },
    // field4: [2, 4, 8],
    // empty: null,
    // map,
    // set,
    // bool: new Boolean(true),
    // num: new Number(2),
    // str: new String(2),
    // symbol: Object(Symbol(1)),
    // date: new Date(),
    // reg: /\d+/mg,
    // error: new Error(),
    func1: () => {
        console.log('code秘密花园');
    },
    func2: function (a, b) {
        return a + b;
    }
}
target.target = target

const arrayTag = '[object Array]'
const objectTag = '[object Object]'
const setTag = '[object Set]'
const mapTag = '[object Map]'
// 能遍历需要进行深拷贝类型
const deepTag = [arrayTag, objectTag, setTag, mapTag]
const stringTag = '[object Array]'
const numberTag = '[object Number]'
const booleanTag = '[object Boolean]'
const dateTag = '[object Date]'
const functionTag = '[object Function]'
const regexpTag = '[object RegExp]'
const errorTag = '[object Error]'
const symbolTag = '[object Symbol]'
/**
 * 拷贝
 * @param {*} source 
 * @param {*} map 
 * @returns 
 */
function cloneDeep(source, map = new WeakMap()) {
  debugger
  if(!isObject(source)) return source

  if(map.get(source)) {
    return map.get(source)
  }
  let cloneTarget
  const type = getType(source)
  if(deepTag.includes(type)) {
    cloneTarget = getInit(source)
  } else {
   return getOtherInit(source, type)
  }
  map.set(source, cloneTarget) // 解决循环引用问题

  if(type === setTag) { // 处理set
    source.forEach(value => {
      cloneTarget.add(cloneDeep(value))
    })
    return cloneTarget
  }

  if(type === mapTag) { // 处理map
    source.forEach((value, key) => {
      cloneTarget.set(key, cloneDeep(value))
    })
    return cloneTarget
  }
  let keys = type === arrayTag ? undefined : Object.keys(source)
  forEach(keys || source, (value, key) => {
    debugger
    if(keys) {
      key = value
    }
    cloneTarget[key] = cloneDeep(source[key], map)
  })
  return cloneTarget
}

// 判断是不是对象
function isObject(target) {
  return ['object'].includes(typeof target) && target !== null
}
// 获取类型
function getType(target) {
  return Object.prototype.toString.call(target)
}
// 获取初始化对象
function getInit(target) {
  const Ctor = target.constructor
  return new Ctor()
}
// 初始化原始
function getOtherInit(target, type) {
  const Ctor = target.constructor
  switch (type) {
    case stringTag:
    case numberTag:
    case booleanTag:
    case dateTag:
    case errorTag:
      return new Ctor(target) 
    case regexpTag:
      return cloneRegExp(target)
    case functionTag:     // 其实不需要拷贝函数 两个对象公用一个函数不会有什么问题
     return cloneFunction(target)
    case symbolTag:
      return cloneSymbol(target)
    default:
      return null;
  }
}
// 拷贝正则
function cloneRegExp(target) {
  const regFlags = /\w*$/
  const source = target.source
  console.log('reg source', source)
  console.log('reg 第二', regFlags.exec(target))
  const result = new target.constructor(source, regFlags.exec(target))
  return result
}
// 拷贝函数
function cloneFunction(func) {
  const bodyReg = /(?<={)(.|\n)+(?=})/m
  const paramReg = /(?<=\().+(?=\)\s+{)/
  // const paramReg2 = /\w(\(\w+\.*\))/g
  // const bodyReg2 = /{(.*)}/g
  const funcString = func.toString()
  console.log('funcString', funcString)
  if (func.prototype) { // 说明是正常函数
    const param = paramReg.exec(funcString)
    const body = bodyReg.exec(funcString)
    console.log('param', param)
    console.log('body', body)
    // console.log('body2', funcString.match(bodyReg2))
    // console.log('param2', funcString.match(paramReg2))
    if(body) {
      if(param) {
        const paramArr = param[0].split(',')
        return new Function(...paramArr, body[0])
      } else {
        return new Function(body[0])
      }
    } else {
      return null
    }
  } else { // 箭头函数
    return eval(funcString)
  }
}
// 拷贝symbol
function cloneSymbol(target) {
  return Object(Symbol.prototype.valueOf.call(target))
}
// 使用while实现forEach 提高性能
function forEach(array, cb) {
  let index = -1
  let len = array.length
  while(++index < len) {
    cb(array[index], index)
  }
  return array
}
const res = cloneDeep(target);
console.log('res', res)
