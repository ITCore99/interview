# 虚拟DOM

## 优点

- 虚拟dom的最大优点是将渲染过程进行了抽象化，使之有了跨平台的能力。不止局限于浏览器端还可以是安卓、IOS端。
- 虚拟dom在牺牲了部分性能的前提先增加了可维护性实现了dom的集中化操作。在数据发生改变之后现先对虚拟DOM进行修改，再反映到真实DOM上。用最小的代价来个更新DOM 提高效率。
- 打开了函数式UI的大门

## 缺点

- 首次渲染大量DOM时由于中间多了一层虚拟DOM的计算相较于innerHTML会慢一些
- 虚拟DOM需要在内存中维护一份DOM的副本 占用内存空间
- 虚拟DOM 对于大量的改动这是合适的。但是对于单一的、频繁的更新的话虚拟DOM将会话费更多的时间在处理计算中。
