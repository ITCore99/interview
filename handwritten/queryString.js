/**
 * 实现一个用来解析url queryString的函数
 */
function qs(url) {
  const reg = /[?&](?<key>\w+)=(?<value>\w+)/g
  const obj = {}
  let res
  while(res = reg.exec(url)) {
    let { key, value } = res.groups
    key = encodeURIComponent(key)
    value = encodeURIComponent(value)
    if(obj[key] !== undefined) {
      obj[key] = [obj[key], value].flat()
    } else {
      obj[key] = value
    }
  }
  return obj
}
const url = "https://shanyue.tech?a=3&b=4&c=5";
console.log('qs=>', qs(url))

/**
 * 这个算是比较完整的 考虑了 参数编码和同一个参数出现多次的情况
 * @param {} url 
 * @returns 
 */
function url2Params(url) {
  const dict = {};
  url.replace(/([^?&]*)=([^&]*)/g, (__, key, val) => {
  
    
    if (dict[key]) return (dict[key] = [dict[key], val].flat());
    dict[key] = val;
  });
  return dict;
}