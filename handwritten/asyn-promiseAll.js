/**
 * 使用 async await 函数实现promsie.all 功能
 */


/**
 * 实现
 * @param {*} cbs 
 * @returns 
 */
function asyncCreatePromiseAll(cbs) {
  return new Promise(async(resolve, reject) => {
   try {
    let count = 0
    let result = []
    const cbRes = cbs.map(cb => cb())
    for(let i = 0; i < cbRes.length; i++) {
      const res = await cbRes[i]
      result[i] = res
      count++
      if(count === cbs.length) return resolve(result)
    }
    } catch (err) {
      reject(err)
    }
  })
}

/**
 * 实现一个异步函数
 * @param {*} n 
 * @param {*} timer 
 * @returns 
 */
function cb(n, timer) {
  return function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(n===2) {
          return reject('2 error')
        }
        resolve(n)
      }, timer)
    })
  }
  
}

asyncCreatePromiseAll([cb(1, 1000), cb(4, 2000), cb(3, 3000)]).then(res => {
  console.log('res=>', res)
}).catch(err => {
  console.log('err=>', err)
})
console.log(555)