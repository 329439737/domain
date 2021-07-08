
console.log(PATH_ENV)

const BASEURL = {
  prod: 'http://cloud-java.china-iia.com', // 生产环境
  test: 'http://192.168.1.101:7000', // 测试环境
  dev: 'http://192.168.1.101:7000' // 开发
}

// 图片服务器
const IMGHOST = 'http://picture.iiasaas.com/'

// 测试穿透
// http://cjava.nanjingsaas.cn:8080

const host = BASEURL[PATH_ENV]

export default {
  host,
  IMGHOST
}
