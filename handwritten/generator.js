function * helloWorldGenerator() {
  yield 'hello';
  yield 'word';
  return 'ending';
}
const hw = helloWorldGenerator()

// console.log(hw.next())
// console.log(hw.next())
// console.log(hw.next())
// console.log(hw.next())

function* f() {
  console.log('执行了！')
}

var generator = f();

setTimeout(function () {
  generator.next()
}, 2000);

// 实现对象的Object.entries  是对象可以进行for of 遍历
const jane = {
  first: 'Jane',
  last: 'Doe'
}
function* objectEntries() {
  const keys = Reflect.ownKeys(this)
  for(let key of keys) {
    yield [key, this[key]]
  }
} 
jane[Symbol.iterator] = objectEntries
for(let [key, value] of jane) {
  console.log(key, value)
}