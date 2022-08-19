/**
 * 实现一个lodash的merge 函数
 */
function merge(object, ...sources) {
  for(source of sources) {
    for(key of Object.keys(source)) {
      if(source[key] === undefined && object[key]) continue; // 跳过undefined
      if(isPlainObjectOrArray(source[key])) {
        if(getRawType(object[key]) === getRawType(source[key])) {
          if(isPlainObject(source[key])) {
            merge(object[key], source[key])
          } else {
            object[key] = object[key].concat(source[key])
          }
        } else {
          object[key] = source[key]
        }
      } else {
        object[key] = source[key]
      }
    }
  }
}

// 是否是纯对象或者是数组
function isPlainObjectOrArray(val) {
  return (val && typeof val === "object") || Array.isArray(val)
}
// 获取原始类型
function getRawType(val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}
// 是否是纯对象
function isPlainObject(val) {
  return getRawType(val) === 'Object'
}

// merge array
var object = {
  a: [{ b: 2 }, { d: 4 }],
};
merge(object, { a: [{ c: 3 }, { e: 5 }] });
console.log(object);

// merge object
var object = {
  a: { b: { c: 1 } },
};
merge(object, { a: { b: { d: 2 } } });
console.log(object);

// overwrite primitive value
object = {
  a: { b: 1 },
};
merge(object, { a: { b: 2 } });
console.log(object);

// skip undefined
object = {
  a: { b: 1 },
};
merge(object, { a: { b: undefined } });
console.log(object);


// multiple sources
var object = {
  a: { b: { c: 1, d: [1] } },
};
merge(object, { a: { b: { e: 2 } } }, { a: { b: { d: [2] } } });
console.log(JSON.stringify(object));