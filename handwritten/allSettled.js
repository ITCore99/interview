/**
 * promise.allSettled 
 * 函数接受一个promise的数组 只有当参数中所有异步promsie状态返回一个promise 只有参数中promise全部发生变化（无论是fulfilled还是rejected）返回的promise会是
 * fulfilled的状态回调的参数是一个数组时参数每一个参数拥有一个status和value属性 可以通过status是fulfilled还是rejected来判断promise执行成功还是失败。
 */

/**
 * 简易实现
 */
function customAllSettled(promises) {
  const onReslove = value => ({status: 'fullfilled', value})
  const onReject = reason => ({status: 'rejected', reason})
  return Promise.all(promises.map((promise) => {
    return Promise.resolve(promise).then(onReslove, onReject)
  }))
}