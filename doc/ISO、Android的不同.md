# ISO、Android的表现不一致兼容

## 时期解析格式不同

- Android 兼容 xxxx-xx-xx 的格式
- ISO 不兼容 xxxx-xx-xx 格式 而是 xxxx/xx/xx 这种格式
- 兼容 在替换'-' 为 '/' 然后手动进行格式字符串的拼接

## 获取文档body不一致

- Android 使用document.documentElement exp: scrollTop 取值使用这种在ISO上获取的值为0
- ISO 使用document.body exp: scrollTop 取值使用这种在Android上获取的值为0

## scroll滚动事件

- 在IOS设备上由于未了节省设备事件的开销 window.scroll事件的触发频率极低，只有在页面滚动停止、回到顶部、回到底部才会进行触发事件
- 解决方法:
  - 使用setInterval 来定时的在滚动期间触发事件 模拟实现scroll事件触发。但是IOS虽然不会暂停js执行但是会暂停绘制，应用程序的JavaScript将继续运行，但是在滚动操作完成之前，DOM的任何更改都不会被绘制。
  - touchmove代替：touchmove事件虽然触发平评率没做scroll高。还有一个致命的问题是touchmove会有惯性滚动，在滚动期间不能触发scroll也不执行touchMove事件
  - touchmove + scroll 事件结合。使用touchmove来进行不断的触发滚动事件 通过scroll来进行监听惯性滚动事件的结束。
  - isScroll 库来实现模拟滚动

