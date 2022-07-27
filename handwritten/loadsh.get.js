 /**
 * const object = { a: [{ b: { c: 3 } }] };
 * 
 * //=> 3
 * get(object, "a[0].b.c");
 * //=> 3
 * get(object, 'a[0]["b"]['c']');
 * //=> 10086
 * get(object, "a[100].b.c", 10086);
 */
 const object = { a: [{ b: { c: 3 } }] };

/**
 * 注意主要实现的是对路径的调整
 * @param {*} source 
 * @param {*} path 
 * @param {*} defaultValue 
 * @returns 
 */
function get(source, path, defaultValue = undefined) {
  const paths = path
    .replace(/\[(\w+)\]/g, '.$1') // 处理数组
    .replace(/\["(\w+)"\]/g, '.$1') // 处理双引号
    .replace(/\['(\w+)']/g, '.$1') // 处理单引号
    .split('.')
  // console.log(paths)
  let res = source
  for(const p of paths) {
    res = res?.[p]
  }
  return res === undefined ? defaultValue : res
}
// 测试1
console.log(get(object, "a[100].b.c", 10086))
console.log(get(object, "a[0]['b']['c']"))
console.log(get(object, "a[0].b.c"))
