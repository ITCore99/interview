/**
 * 用字符串数组组成#字游戏版board, 判断这个游戏版有没有可能最终形成
 * 游戏版是一个3x3的数组由字符 x 和 o 组成 符合 “” 代表的是空位
 * 两个玩家轮流将字符放置到空位 一个玩家执 “x” 旗 一个玩家执 “o” 
 * x 棋 和 o 棋只允许放置到空位不允许在已有的位置进行放置
 * 当有3个相同的字符填充任何行或者任何列以及对角线的时候 游戏结束 board 生成
 * 
 * 分析：
 * 1、首先要形成最终版由于是轮流的下棋 有三种情况第一种是 x 赢了 第二种是 o 赢了 第三种是胜负未分(包含了没有下完和棋盘已经满了) 
 * x 赢了： 必然 x 棋子的数量 - o 棋子的数量 = 1 && x三个相连
 * o 赢了: 类似 o 棋子的数量 - x 棋子的数量 = 0 (因为x先进行落子) && o三个相连
 * 胜负未分: 只要不满足 x - o = 1， o - x = 0 这两种情况就认为是胜负未分 因为不管什么情况x棋子和o棋子最多只能相差一枚
 */

/**
 * 判断是不是有效棋盘
 */
function validaBoard(board) {
  let xCount = 0, oCount = 0
  for(let r = 0; r < board.length; r++) {
    const row = board[r]
    for(let l = 0; l < board.length; l++) {
      if(row[l] === 'x') xCount++
      if(row[l] === 'o') oCount++
    }
  }
  // console.log('xcount', xCount, 'oCount', oCount)
  if(!(xCount - oCount === 1 || oCount - xCount === 0)) { // 胜负未分的局面 条件也可以简化为 (xCount !== oCount && xCount - oCount = 1)
    return false
  }
  if(win('xxx', board) && xCount - oCount === 1) { // x赢了
    return true
  }
  if(win('ooo', board) && oCount - xCount === 0) { // o赢了
    return true
  }
  return false
} 

/**
 * 判断是不是赢了
 */
function win(str, board) {
  for(let l = 0; l < 3; l++) { // 判断列是否是连续三个字符
    let res = ''
    for(let r = 0; r < 3; r++ ) {
      res += board[r][l]
    }
    if(res === str) {
      return true
    }
  }
  for(let r = 0; r < board.length; r++) { // 判断行是否是是不是三个练习相连
    if(board[r] === str) return true
  }
  
  if(board[0][0] + board[1][1] + board[2][2] === str) { // \ 向对角线是不是三个连续相连
    return true
  }

  if(board[0][2] + board[1][1] + board[2][0] === str) { // / 向对角线是不是三个连续相连
    return true
  }
  
  return false
}

// 测试
const board = ["xxx", "oxo", "o o"]
console.log(validaBoard(board))