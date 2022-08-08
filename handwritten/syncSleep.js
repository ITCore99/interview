/**
 * 实现一个同步的sleep 
 * 主要的实现思路是 占用同步主线程
 */
function sleep(t =1000) {
  console.log('thread sleep start')
  const startTime = + new Date()
  while(true) {
    let currentTime = + new Date()
    if(currentTime - startTime > t) break
  }
  console.log('thread sleep end')
}
console.log(1)
sleep(3000)
console.log(2)