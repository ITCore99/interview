/**
 * 柯力化是让一个多参数的函数分解为接受一个参数返回一个函数用于接受剩余的参数 当参数达到数量时才进行执行
 * 作用：
 * 1、复用函数参数
 * 2、延迟执行 等待调用到参数达到要求是才执行
 * 
 * 应用:
 * 1、封装工具函数 比如检测phone email利用正则
 * 2、
 */

// 通用currying函数
function currying(fn, ...args) {
  const len = fn.length
  return function (...params) {
    const allArgs = [...args, ...params]
    if (allArgs.length === len) {
      return fn.apply(this, allArgs)
    }
    return currying.bind(null, fn, ...allArgs)
  }
}

function checkPhone (reg, val) {
  return reg.test(val)
}

const checkPhoneCurry = currying(checkPhone, /^\d{11}$/)

console.log(checkPhoneCurry('777'))

function sum(a, b ,c) {
  return a + b +c 
}

const sumCurry = currying(sum)
console.log(sumCurry(1)(2)(3))

/**
 * 检测浏览器绑定事件的方法
 */
function curryingAddEvent() {
  if (window.addEventListener) {
    return function(el, type, fn, isCapture) {
      el.addEventListener(type, fn, isCapture)
    }
  } else {
    return function(el, type, fn) {
      el.attachEvent('on' + type, fn)
    }
  }
}

// 暴露出去
const addEvent = curryingAddEvent()