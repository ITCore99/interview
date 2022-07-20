# vue-loader的原理

vue-loader会把sfc中的内容进行拆分 分为template,script,和style三个虚拟模块。然后分别匹配webpack配置对应的rules，比如script模块会匹配所有跟处理js和ts相关的loader。
template 中的内容会通过vue compiler转换为render函数合并到script "虚拟模块" 中。
scoped style会经过vue-loader/style-post-loader进行处理成为只匹配特定元素的私有样式。
