/**
 * LRU 缓存算法 
 * 获取数据 get(key) 和 写入数据 set(key)
 * 获取数据get(key)如果数据密钥key存在与缓存中 则获取密钥的值总是正值，否则 返回 -1
 * 写入数据put(key, value) 如果密钥不存在则写入数据。当缓存容量达到上限时，他应该在写入新数据之前删除最久未使用的数据，从而新数据留出空间
 * 进阶：
 * 你是否可以O(1)时间复杂度内完成这种操作
 */
/**
 * 第一种实现使用数组
 */
class LRUCACHE {
  constructor(opcaity) {
    // 缓存key值
    this.keys = []
    // 容量
    this.capacity = capacity
    // 缓存
    this.cache = {}
  }
  getKey(key) {
    if(this.cache[key]) {
      this.keys.push(key) // 将最新访问的key推送到数组末尾
      this.removeKey(key)
      return this.cache[key]
    }
    return -1
  }
  setKey(key, value) {

    if(this.cache[key]) {
      this.removeKey(key)
      this.keys.push(key)
      this.cache[key] = value
    } else {
      if(this.keys.length > this.capacity) {
        const firstKey = this.keys[0]
        this.removeKey(firstKey)
        this.removeCahce(firstKey)
      }
    }
  }
  removeKey(key) {
    const index = this.key.findIndex(item=> item === key)
    this.keys.splice(index, 1)
  }
  removeCahce(key) {
    this.cache[key] = null
  }
}
/**
 * 使用o(1) 使用map
 */
 class LRUCACHE {
  constructor(capacity = 2) {
    // 容量
    this.capacity = capacity
    // 缓存
    this.cache = new Map()
  }
  getKey(key) {
    if(this.cache.has(key)) {
      const value = this.cache.get(key)
      this.cache.delete(key)
      this.keys.setKey(key, value) // 将最新访问的key推送到数组末尾
      return value
    }
    return -1
  }
  setKey(key, value) {
    if(this.cache.has(key)) {
      this.cache.delete(key)
      this.cache.set(key, value)
    } else {
      this.cache.set(key, value)
      if(this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value)
      }
    }
  }
  removeKey(key) {
    const index = this.key.findIndex(item=> item === key)
    this.keys.splice(index, 1)
  }
  removeCahce(key) {
    this.cache[key] = null
  }
}