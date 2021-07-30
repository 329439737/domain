import Ajax from './../unit/ajax'
const https = 'http://www.liulongbin.top:3005/api'

// 品牌列表
export default {
  DomainList (params) {
    return Ajax.get(`${https}/getprodlist`, { params })
  },
  AddList (params) {
    return Ajax.post(`${https}/addproduct`, params)
  },
  delList (params) {
    return Ajax.get(`${https}/delproduct/+${params}`)
  },
  // 新闻资讯列表
  NewsList (params) {
    return Ajax.get(`${https}/getnewslist`, { params })
  },
  // 图片分类导航列表
  imgList (params) {
    return Ajax.get(`${https}/getimgcategory`, { params })
  },
  // 图片详情列表
  imgdetail (params) {
    return Ajax.get(`${https}/getimageInfo/+${params}`)
  }

}
