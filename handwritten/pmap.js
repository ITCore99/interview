/**
 * 如何使用promsie.map控制 限制promise并发数
 */
//  pMap([1, 2, 3, 4, 5], (x) => Promise.resolve(x + 1));

//  pMap([Promise.resolve(1), Promise.resolve(2)], (x) => x + 1);
 
//  // 注意输出时间控制
 pMap([1, 2, 3, 4, 5, 6, 7, 8], (x) => sleep(1000,x), { concurrency: 2 });

 function sleep(time, num) {
   return new Promise((reslove, reject) => {
     setTimeout(() => {
      reslove(num)
     }, time)
   })
 }

 /**
  * 自己实现 注意命名
  * @param {*} list 
  * @param {*} cb 
  * @param {*} option 
  */
 function pMap(list, cb, option = {}) {
    const len = list.length
    const concurrency = option.concurrency || len
    const ing = []
    let index = 0
    
    // 其实根本就不要移除
    function remove(p) {
      const i = ing.findIndex(item => item === p)
      ing.splice(i, 1)
    }

    function next() {
      if(index > len - 1) return
      let p = Promise.resolve(list[index]) // 注意这里一定promise.resolve下 不然第二种就不成立 第二种回调返回的不是promise
      .then(o => cb(o)).then(res => {
        console.log(res)
        remove(p)
        next()
      })
      ing.push(p)
      index++
    }
    for(let i = 0; i < concurrency; i++) {
        next()
    }
 }

 /**
  * 山月
  * @param {*} list 
  * @param {*} mapper 
  * @param {*} concurrency 
  * @returns 
  */
 function pMap2(list, mapper, concurrency = Infinity) {
  // list 为 Iterator，先转化为 Array
  list = Array.from(list);
  return new Promise((resolve, reject) => {
    let currentIndex = 0;
    let result = [];
    let resolveCount = 0;
    let len = list.length;
    function next() {
      const index = currentIndex;
      currentIndex++;
      Promise.resolve(list[index])
        .then((o) => mapper(o, index))
        .then((o) => {
          console.log(o)
          result[index] = o;
          resolveCount++;
          if (resolveCount === len) {
            resolve(result);
          }
          if (currentIndex < len) {
            next();
          }
        });
    }
    for (let i = 0; i < concurrency && i < len; i++) {
      next();
    }
  });
}