// 创建seeion
export const SetSeeion = (key, value) => {
  if (!key) return
  window.localStorage.setItem(key, value)
}

// 获取token

export const GetSeeion = (key) => {
  return window.localStorage.getItem(key)
}

// 清除token
export const ClearSeeion = (key) => {
  return window.localStorage.removeItem(key)
}

// 添加表情包
export const addgif = (gif, param) => {
  let recordlist = JSON.parse(window.localStorage.getItem(gif))

  if (recordlist) {
    recordlist.push(param)
    let newshuzi = JSON.stringify(recordlist)
    return window.localStorage.setItem(gif, newshuzi)
  } else {
    let shuzi = []
    shuzi.push(param)
    let newshuzi = JSON.stringify(shuzi)
    return window.localStorage.setItem(gif, newshuzi)
  }
}

// 获取表情包
export const getgif = (gif) => {
  return JSON.parse(window.localStorage.getItem(gif))
}
