# pnpm

## pnpm 特点

- 1、包的安装速度快
- 2、磁盘的空间利用率高（使用软连接和硬链接的方式）
  pnpm内部使用基于内容寻址的文件系统来存储磁盘上的所有文件。
    不会重复安装同一个包。用npm/yarn的时候如果100个项目都依赖lodash那么lodash很可能安装100次。磁盘中就有100个

## 解决了npm的什么问题

- 1、 解决npm/yarn中的包重复安装的问题（导致了node_modules的体积变大）使用软链接的方式解决 软连接到.npm(在node_modules)文件夹下面 .npm下面才是真真的包 里面是平铺的带版本号
  ./node_modules/package-a
  ./node_modules/package-b
  ./node_modules/package-c
  ./node_modules/package-c/node_modules/lodash@3.0
  ./node_modules/package-d
  ./node_modules/package-d/node_modules/lodash@3.0
  ./node_modules/lodash@4.0
  由以上可以看出lodash3.0被package-c和-d安装了两次（注意这个哪个包会被提升是根据涉及的父包在package中的位置前后）

- 2、解决幽灵依赖问题。
  因为npm会对进行提升 提升到到node_modules下面 如果在其他包中用了lodash那么我们代码中没有安装也可以使用lodash 如果某一天这个包进行升级不再使用lodash 那么就不会进行安装导致了我们的代码中使用lodash使用报错。 因为pnpm不会进行包的提升只会在node_modules中存在package.json中声明的包 所以就不会有这个问题。

## npm/yarn install

主要分为两个部分, 首先是执行npm install之后1、包如何到达node_modules下面。2、node_modules内部如何进行包管理。
执行命令之后 首先会进行构建依赖树，然后针对每个节点下面的依赖包，会经历下面的步骤。

- 1、将依赖包的版本区间解析为某个具体的版本号。
- 2、下载对应版本的的tar包到本地离线镜像。
- 3、将依赖包从离线镜像解压到本地缓存。
- 4、将依赖从缓存中拷贝到当前目录的node_modules。
然后对应的包就到了node_modules下面。

那么这些依赖在node_moudules内部是什么样的目录结构 (提升加树结构展示)
