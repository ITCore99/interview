/**
 * 实现一个用来解析url queryString的函数
 */
function qs(url) {
  const reg = /[?&](?<key>\w+)=(?<value>\w+)/g
  const obj = {}
  let res
  while(res = reg.exec(url)) {
    const { key, value } = res.groups
    obj[key] = value
  }
  return obj
}
const url = "https://shanyue.tech?a=3&b=4&c=5";
console.log('qs=>', qs(url))