/**
 * 队列与栈相互转化
 */

/**
 * 队列实现栈
 */
function realizeQueueByStack(...args) {
  const stack1 = []
  const stack2 = []
  for(let i = 0 ; i < args.length; i++) {
    stack1.push(args[i])
  }
  while(stack1.length) {
    stack2.push(stack1.pop())
  }
 return {
  pop() {
    return stack2.pop()
  }
 }
}

/**
 * 队列实现栈
 */
 function realizeStackByQueue() {
  const queue1 = []
  const queue2 = []
 return {
  push(value) {
    if(queue1.length) {
      queue2.push(value)
      while(queue1.length) {
        queue2.push(queue1.shift())
      }
    } else {
      queue1.push(value)
      while(queue2.length) {
        queue1.push(queue2.shift())
      }
    }
  },
  pop() { // 弹出最终肯定只有一个队列中有值 另一个队列是空的
    if(queue1.length) { 
      return queue1.shift()
    } else {
      return queue2.shift()
    }
  }
 }
}

// 测试后
const arr = [1, 2, 3, 4, 5]
const queue = realizeQueueByStack(...arr)
for(let i = 0; i < arr.length; i++) {
  console.log(queue.pop())
}
console.log("==============>")
const stack = realizeStackByQueue()
for(let i = 0; i < arr.length; i++) {
  stack.push(arr[i])
}
for(let i = 0; i < arr.length; i++) {
  console.log(stack.pop())
}