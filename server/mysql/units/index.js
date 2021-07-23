let todolist = require('../tabs/testtab')

// 同步表结构
const testtab = () => {
  todolist.sync({
    force: true // 强制同步，先删除表，然后新建
  })
}

export default {
  testtab
}
