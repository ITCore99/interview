/**
 * 获取dom树中最多的标签 想听的个数可以多个返回
 * document.querySelectorAll("*")
 * @param {*} el 
 * @returns 
 */
function getMostFrequentTag() {
  const counter = {};
  document.querySelectorAll("*").forEach((element) => {
    counter[element.tagName] = counter[element.tagName]
      ? counter[element.tagName] + 1
      : 1;
  });

  const orderedTags = Object.entries(counter).sort((tag1, tag2) => {
    if (tag1[1] < tag2[1] ) {
      return 1;
    }
    if (tag1[1] > tag2[1]) {
      return -1;
    }
    return 0;
  });
  console.log('降序', orderedTags)

  const result = [];
  for (const tag of orderedTags) {
    if (tag[1] < orderedTags[0][1]) {
      break;
    }
    result.push(tag[0]);
  }
  return result;
}
console.log(getMostFrequentTag())