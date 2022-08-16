/**
 * 获取dom树中最多的标签 想听的个数可以多个返回
 * 递归法
 * @param {*} el 
 * @returns 
 */
function getMostFragmentTagByRecursion(el) {
  function getAllTags(el = document) {
    const children = [...el.children].reduce((prev, curr) => {
    return prev.concat(curr, ...getAllTags(curr))
    }, [])
    return children
  }
  const allTags = getAllTags()
  const tagMap = allTags.reduce((prev, curr) =>{
    const tagName = curr.tagName
    prev[tagName] =  prev[tagName] ? prev[tagName] + 1 : 1
    return prev
  }, {})
  const sortAllTag = Object.entries(tagMap).sort((a, b) => {
    if (a[1] < b[1]) {
      return 1
    }
    if (a[1] > b[1]) {
      return -1
    }
    if (a[1] === b[1]) {
      return 0
    }
  })
  const result = []
  for(let item of sortAllTag) {
    if(item[1] < sortAllTag[0][1]) {
      continue
    }
    result.push(item[0])
  }
  return result
}
const result = getMostFragmentTagByRecursion(document)
console.log('result=>', result)