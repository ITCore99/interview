/**
 * 这里我们简易实现一个koa 框架
 * 要是现象的效果 类似下方
 * const Koa = require("koa");
 * const app = new Koa();
 * app.use(async (ctx, next) => {
 * console.log("Middleware 1 Start");
 * await next();
 * console.log("Middleware 1 End");
 * });
 * app.use(async (ctx, next) => {
 * console.log("Middleware 2 Start");
 * await next();
 * console.log("Middleware 2 End");
 * ctx.body = "hello, world";
 * });
 * app.listen(3000);
 * 分析: 简易的可以分析为3部分
 * 1、Application: 基本的服务器框架
 * 2、Context: 服务器框架基本数据结构封装，用http请求解析和封装
 * 3、MiddleWare: 中间件 也是洋葱模型的核心机制
 */
const http = require('http')

// 构建Application
class Koa {
  constructor() {
    this.middleWares = []
  }
  // 进行监听
  listen(...args) {
    // 创建服务器
    const server = http.createServer(async (req, res)=> {
      console.log('req', req.url)
      // 创建上下文
      const ctx = new Context(req, res)
      // 此时处理为与koa兼容Context的app.use函数
      const fn = compose(this.middleWares)
      await fn(ctx)
      // ctx.body为相应内容
      ctx.res.end(ctx.body)
    })
  
    server.listen(...args)
  }
  // 使用中间件
  use(middleware) {
    // console.log('user', typeof middleware, Array.isArray(middleware))
    this.middleWares.push(middleware) 
  }
}

// 测试
const app = new Koa()
app.use((ctx ,next) => {
  console.log("Middleware 1 Start")
  next()
  console.log("Middleware 1 End")
})
app.use((ctx, next) => {
  console.log("Middleware 2 Start")
  next()
  console.log("Middleware 2 end")
})
app.listen(3000, () => {
  console.log('服务启动了')
})

class Context {
  constructor(req, res){
    this.req = req
    this.res = res
  }
}

/**
 * 构造洋葱模型
 * 洋葱模型就是每一个中间件就像一个洋葱的一层 要到洋葱的中心需要穿过每一层两次以一进一出 最先进入的最后出去 使用next 去到下一个中间件
 */
function compose(fns) {
  return (ctx) => {
    function dispatch(i) {
      if(i === fns.length) return 
      const middleware = fns[i]
      const next = () => dispatch(i+1)
      middleware(ctx, next)
    }
    return dispatch(0)
  }
}