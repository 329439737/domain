import { Icon } from 'antd'

export const MenuInfo = [
  {
    title: '首页管理',
    icon: <Icon type="home" />,
    key: 1,
    children: [
      {
        keyc: 10,
        titlt: '首页信息',
        path: '/admin/home'
      }
    ]
  },
  {
    title: '用户管理',
    icon: <Icon type="user" />,
    quan: false,
    key: 2,
    children: [
      {
        keyc: 20,
        titlt: '用户信息',
        path: '/admin/userinfo',
        quan: true
      }
    ]
  },
  {
    title: '域名管理',
    icon: <Icon type="play-circle" />,
    key: 3,
    children: [
      {
        keyc: 30,
        titlt: '域名信息',
        path: '/admin/domain'
      },
      {
        keyc: 31,
        titlt: '预警栏',
        path: '/admin/warning'
      }
    ]
  },
  {
    title: '自有域名管理',
    icon: <Icon type="play-circle" />,
    key: 4,
    children: [
      {
        keyc: 40,
        titlt: '自有域名管理列表',
        path: '/admin/owndoamin'
      },
      {
        keyc: 41,
        titlt: '自由域名录入',
        path: '/admin/addowndoamin'
      }
    ]
  },
  {
    title: '货物管理',
    icon: <Icon type="play-circle" />,
    key: 5,
    children: [
      {
        keyc: 50,
        titlt: '获取管理',
        path: '/admin/goods'
      }
    ]
  },
  {
    title: '大屏管理',
    icon: <Icon type="play-circle" />,
    key: 6,
    children: [
      {
        keyc: 60,
        titlt: '大屏管理',
        path: '/admin/dp'
      }
    ]
  },
  {
    title: 'Hooks',
    icon: <Icon type="play-circle" />,
    key: 7,
    children: [
      {
        keyc: 70,
        titlt: 'demo1',
        path: '/admin/hooks'
      },
      {
        keyc: 71,
        titlt: 'demo2',
        path: '/admin/demo2'
      },
      {
        keyc: 73,
        titlt: 'demo3',
        path: '/admin/jsdemo3'
      }
    ]
  },
  {
    title: 'Js',
    icon: <Icon type="play-circle" />,
    key: 8,
    children: [
      {
        keyc: 80,
        titlt: 'demo1',
        path: '/admin/jsdemo1'
      },
      {
        keyc: 81,
        titlt: 'demo2',
        path: '/admin/jsdemo2'
      }

    ]
  },
  {
    title: '网卡管理',
    icon: <Icon type="play-circle" />,
    key: 9,
    children: [
      {
        keyc: 90,
        titlt: '网卡信息',
        path: '/admin/books'
      }

    ]
  }
]
