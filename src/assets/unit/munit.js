// 判断真实姓名重复
export const repeatusername = (name) => {
  return 1
}

// 判断用户名重复
export const repeatname = (name) => {
  return 1
}

// 域名状态
export const domainstatus = [
  { status: -1, name: '全部' },
  { status: 0, name: '创建中' },
  { status: 1, name: '创建失败' },
  { status: 2, name: '实名认证中' },
  { status: 3, name: '实名认证成功' },
  { status: 4, name: '实名认证失败' },
  { status: 5, name: '备案中' },
  { status: 6, name: '已备案待录入' },
  { status: 7, name: '未部署' },
  { status: 8, name: '部署中' },
  { status: 9, name: '部署完成' },
  { status: 10, name: '部署失败' },
  { status: 11, name: '正常' },
  { status: 12, name: '过期警告' },
  { status: 13, name: '证书失效' }
]

// 域名后缀
export const admainz = [
  { id: 1, name: '.com' },
  { id: 2, name: '.cn' },
  { id: 3, name: '.top' },
  { id: 4, name: '.net' },
  { id: 5, name: '.com.cn' },
  { id: 6, name: '.com' },
  { id: 7, name: '.net.cn' }
]

// 预警项目
export const warningList = [
  {
    title: '预警项目',
    key: '1',
    children: [
      {
        title: '域名到期预警（30天）',
        key: '10'
      },
      {
        title: '证书到期预警（15天）',
        key: '12'
      }
    ]
  }
]

// 注册平台
export const regin = [
  { id: -1, name: '全部' },
  { id: 1, name: '腾旭云' },
  { id: 2, name: '阿里云' },
  { id: 3, name: '华为云' }
]
