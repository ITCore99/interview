# JSON.stringify函数的进行深拷贝存在的问题

- 对于值为undefined、函数、symbol的属性会进行忽略
- Date日期对象会先进行调用toJSON方法进行将其转化为字符串(Date.toISOString())，因此会当做字符串进行拷贝
- NaN、infinity格式的数组和null 都会被当做null
- 其他类型对象 包括map set weakmap weakset只能序列化可枚举的属性
- 对包含循环引用的对象使用此方法会报错 调用栈溢出
