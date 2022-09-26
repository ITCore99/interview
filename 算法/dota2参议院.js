/**
 * dota2 参议院
 * 刀塔世界中有两个阵营一个是天辉一个是夜魇
 * 刀塔参议院有两个阵营的参议院组成。现在参议院决定需要对刀塔游戏进行改变 他们以基于轮为过程进行投票,每一轮中美味参议员都可以行使以下两种权利
 * 1、禁止对方阵营参议员: 参议院可以使对方的一位参议员在这一轮以及后面几轮中丧失所有权利
 * 2、宣布胜利: 如果参议员发现有权利投票的参议员都属于同一个阵营那么他们可以宣布胜利
 * 给定一个字符串代表每位参议员的阵营 字母“R”表示天辉 “D”表示夜魇 如果有n名成员那么字符串的长度就为n
 * 一轮为基础的过程从给定顺序的第一个参议员开始到最后一个参议员结束。这一过程将持续到投票结束。所有失去权利的参议员就会被跳过。
 * 
 * 分析:
 * 
 */

 function getWin(str) {
  const RIndexArr = []
  const DIndexArr= []
  for(let i = 0; i < str.length; i++) {
    if(str[i] === 'R') {
      RIndexArr.push(i)
    } else {
      DIndexArr.push(i)
    }
  }
  while(RIndexArr.length && DIndexArr.length) {
    const R = RIndexArr.shift()
    const D = DIndexArr.shift()
    if(R < D) {
      RIndexArr.push(R + str.length) // 保证第一次的每一轮结束才开始下一轮
    } else {
      DIndexArr.push(D + str.length)
    }
  }
  return RIndexArr.length ? 'R' : 'D'
}

// 测试
const str = "RRDD"
const str2 = "RDD"
console.log(getWin(str))
console.log(getWin(str2))
