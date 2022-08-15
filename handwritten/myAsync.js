/**
 * 实现一个async 
 * 其实async await 函数就是 generator函数配合自执行器语法糖
 */

/**
 * 自执行器
 */
function spawn(genFn) { 
  return new Promise((reslove, reject) => {
    const it = genFn()
    function step(key, args) {
      try {
        var result = it[key](args)
      } catch (err) {
        reject(err)
      }
      const {value, done} = result
      if(done) {
        return reslove(value)
      }
      Promise.resolve(value).then(v => step('next', v), err => step('throw', err))
    }
    step('next')
  })
}

/**
 * 创建一个异步函数
 */
function asyncFn (n, timer) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log(n)
      reslove(n)
    }, timer * 1000)
  })
}

/**
 * 创建一个generator 函数
 */
function* gen() {
  const data1 = yield asyncFn(1, 1)
  const data2 = yield asyncFn(data1 * 2, 1)
  const data3 = yield asyncFn(data2 + 1, 1)
  console.log('data3', data3)
}

function myAsync(genFn) {
  spawn(genFn)
}

myAsync(gen)