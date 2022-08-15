# 加载css的link标签 prefetch 和 preload的区别

```css
<link rel="prefetch" href="style.css" />
<link rel="preload" href="style.css" />
```

## 区别

- preload 加载当前路由必须要的资源 优先级高。 一般对于bundle spliting 和 code spliting资源会使用preload
- prefetch 优先级低 在浏览器idle的状态下加载资源。一般用于加载其他路由资源 如当页面出现link 可使用link prefetch 路由资源 (next.js 默认会对link做路由懒加载+prefetch 即当某条link出现页面中即自动prefetch该link的路由资源)
