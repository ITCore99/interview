# BFC

- BFC 就是页面上一块渲染区域 这个区域有自己的渲染规则 决定子元素如何渲染以及与其他元素的关系 可以将BFC看成是一个独立容器 容器里面的元素不会在布局上影响到外面的元素，并且具有其他普通的元素所没有的一些特性。 

## 如何触发

- body元素
- 浮动元素float 除去none
- 定位元素 position 为absoluted、fixed
- display 为inline-block、 table-cells、flex
- overflow 除去visible之外

## 特性

- 同一个BFC下的元素外边距会发生重叠。 如果要避免外边距的重叠，可以将其放到不不同的BFC容器中
- BFC 可以包含浮动元素(清除浮动) 也就是BFC中浮动元素的高度也会被计算。 overflow: hidden 清除浮动的原理
- BFC 元素可以阻止元素被浮动元素覆盖。 文字环绕效果的形成
