// export const lunbo = (a, b) => { // 使用ES6的箭头函数，a,b参数是前台视图层传过来的
//   let str = b; let timer = 0; let i = 0
//   console.log('a', a, Object.keys(b).length)
//   function typeing () {
//     if (i <= Object.keys(b).length) {
//       console.log(i)
//       a.innerHtml = str.slice(0, i++) + '_'

//       timer = setTimeout(typeing, 200)
//     } else {
//       a.innerHtml = str
//       clearTimeout(timer)
//     }
//   }
//   return typeing// 返回typeing
// }
