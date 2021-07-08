
// 正整数
const num = {
  validator: (rule, value, cb) => {
    if (value && !/^[0-9]*[1-9][0-9]*$/.test(value)) {
      const a = '请输入正整数'
      cb(a)
    } else {
      cb()
    }
  }
}
// 手机号校验
const phone = {
  validator: (rule, value, cb) => {
    if (value && !/^1[3456789]\d{9}$/.test(value)) {
      const b = '请输入正确的手机号'
      cb(b)
    } else {
      cb()
    }
  }
}

/* 密码规则
*  6-12位字符 可包含数字，大小写字母
*/
const passReg = /^[a-zA-Z0-9]{6,12}$/

/* 支付密码规则
*  6位数字
*/
const paywordReg = /^\d{6}$/

// 手机号码规则
const phoneReg = /^1[3456789]\d{9}$/

/* 登录名规则
*  4-16位字符 可包含数字、大小写字母、下划线
*/
const loginnameReg = /^[a-zA-Z0-9_]{4,16}$/

/* 邮箱规则
*/
const emailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/

// 去掉字符串首尾空格
const trim = (str) => {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

// 去掉字符串所有空格
const trimAll = (str) => {
  return str.replace(/\s+/g, '')
}

// 去掉中间空格
const CTrim = (str) => {
  return str.replace(/\s/g, '')
}

// 去掉字符串所有中横线
const trimLine = (str) => {
  return str.replace(/-/g, '')
}

// 替换字符串中的换行
const repLineBreak = (str, sym) => {
  return str.replace(/\n/g, sym)
}

// 商家权限
const authorMap = [
  { type: 1, label: '代理商' },
  { type: 2, label: '供应商' },
  { type: 3, label: '商户' }
]

const warrantTypeMap = [
  {
    type: 1, label: '已授权'
  },
  {
    type: 2, label: '未授权'
  },
  {
    type: 3, label: '已签约'
  }
]

// 品牌类型
const brandTypeMap = [
  { type: 1, label: '国内品牌' },
  { type: 2, label: '国际品牌' }
]

// 型号编辑状态
const skuEditMap = [
  { type: 1, label: '默认' },
  { type: 2, label: '已编辑' },
  { type: 3, label: '已关联图片' }
]

// 订货号需要特殊处理的品牌
const specialModelMap = [
  16
]

// 云供应审核状态
const cloudExamMap = [
  { type: 'ALL', label: '全部', result: '' },
  { type: 'AUDIT_ACCEPTED', label: '待审核', result: 'processing' },
  { type: 'AUDIT_SUCCESS', label: '已通过', result: 'success' },
  { type: 'AUDIT_FAIL', label: '已拒绝', result: 'error' }
]

// 支付方式
const paymethodMap = [
  { type: 1, label: '银行转账' },
  { type: 2, label: '微信支付' },
  { type: 3, label: '支付宝支付' },
  { type: 4, label: '余额支付' },
  { type: 5, label: '信用支付' },
  { type: 6, label: '记账宝支付' }
]

// 云供应单- 支付状态
const supplyPayStatusMap = [
  { type: 'ALL', code: '-1', label: '全部订单' },
  { type: 'INITIAL', code: '0', label: 'EU未支付' },
  { type: 'PAYING', code: '10', label: '待付款' },
  { type: 'CANCEL_IN_PAYING', code: '11', label: '未支付取消' },
  { type: 'CANCEL_OVERDUE', code: '12', label: '超时取消' },
  { type: 'CANCEL_MANUAL', code: '13', label: '手动取消' },
  { type: 'CANCEL_AFTER_PAYING', code: '90', label: '已付首款取消' },
  { type: 'TAIL_PAYING', code: '99', label: '待付尾款' },
  { type: 'WAIT_TO_SHIP', code: '100', label: '待发货' },
  { type: 'PART_DELIVER_GOODS', code: '105', label: '部分发货' },
  { type: 'WAIT_ORDER_GOODS', code: '20', label: '待订货' },
  { type: 'WAIT_TO_RECEIVE', code: '110', label: '已发货' },
  { type: 'ORDER_COMPLETE', code: '1000', label: '订单完成' }
]

// 订单取消 状态集合
const cancelOrderStatusMaps = [
  { type: 'CANCEL_IN_PAYING', code: '11', label: '未支付取消' },
  { type: 'CANCEL_OVERDUE', code: '12', label: '超时取消' },
  { type: 'CANCEL_MANUAL', code: '13', label: '手动取消' },
  { type: 'CANCEL_AFTER_PAYING', code: '90', label: '已付首款取消' }
]

// 云供应单- 发货状态
const supplySendStatusMap = [
  { type: 1, label: '已发货' },
  { type: 2, label: '部分发货' },
  { type: 3, label: '未发货' }
]

// eu订单类型
const euOrderTypeMap = [
  { type: '-1', label: '全部订单' },
  { type: '0', label: '混合订单' },
  { type: '1', label: '自营现货订单' },
  { type: '2', label: '自营期货订单' },
  { type: '3', label: '云仓现货订单' }
]

// 云特价异常原因
const cloudCusPriceAbnormalMaps = [
  { type: 'ALL', code: -1, label: '全部' },
  { type: 'NORMAL', code: 0, label: '正常数据' },
  { type: 'UNDEFINED', code: 10, label: '产品已下架, 无法匹配到供应商品' },
  { type: 'PRICE_TOO_LOW', code: 20, label: '价格过低, 无法匹配到供应商品' },
  { type: 'INVENTORY_NOT_FULL', code: 30, label: '库存不足, 无法匹配到供应商品' }
]

// 名片审核状态
const cardApplyStatusMaps = [
  { type: 'ALL', code: -1, label: '全部', result: '' },
  { type: 'APPLY_IN', code: 0, label: '待审核', result: 'processing' },
  { type: 'RE_APPLY', code: 2, label: '待审核(重新提交)', result: 'processing' },
  { type: 'APPROVED', code: 4, label: '已通过', result: 'success' },
  { type: 'REJECT_BACK', code: 1, label: '已驳回', result: 'error' },
  { type: 'EXPAND_APPLY', code: 5, label: '申请扩容', result: 'processing' }
]

// 名片- 团队规模
const cardLevelMaps = [
  { id: 20, name: '0-20人（免费版）' },
  { id: 100, name: '20-100人（￥99）' },
  { id: 9999, name: '100人以上（￥299）' }
]

// 平台公告发送对象
const systemNoticeObjectMaps = [
  { type: 'M_EU_EMPLOYEE_ALL', label: '全体', color: '#333333' },
  { type: 'M_EU_ALL', label: '全体客户', color: '#333333' },
  { type: 'M_EU_PART', label: '部分客户', color: '#1890ff' },
  { type: 'M_EU_SINGLE', label: '单个客户', color: '#1890ff' },
  { type: 'M_EMPLOYEE_ALL', label: '全体员工', color: '#1890ff' },
  { type: 'M_EMPLOYEE_PART', label: '部分员工', color: '#1890ff' },
  { type: 'M_EMPLOYEE_SINGLE', label: '单个员工', color: '#1890ff' }
]

// 消息类型总览
const notifyTypeMaps = [
  { id: 'ALL', name: '全部' },
  { id: 'SYSTEM_MSG', name: '系统通知' },
  { id: 'SYSTEM_NOTIFY', name: '活动通知' },
  { id: 'SYSTEM_ANNOUNCEMENT', name: '系统公告' },
  { id: 'TASK_DISTRIBUTE', name: '任务分发' },
  { id: 'PLATFORM_ANNOUNCEMENT', name: 'IIASaaS公告' }
]

// 消息阅读状态
const notifyReadMaps = [
  { id: 'ALL', name: '全部' },
  { id: 'UNREAD', name: '未读' },
  { id: 'READ', name: '已读' }
]

// 物流服务枚举
const logisticsWayMaps = [
  { type: 'SELF', label: '自营服务' },
  { type: 'SAAS', label: 'IIASaaS服务' },
  { type: 'TAKE_THEIR', label: '客户自提' }
]

// 开票状态枚举
const invoiceOpenedMaps = [
  { id: 'ALL', name: '全部' },
  { id: 'OPENING', name: '未开票' },
  { id: 'OPENED', name: '已开票' }
]

// IIASaaS保险服务发票&IIASaaS快递服务发票状态
const serverInvoiceOpenedMaps = [
  { id: 'UN_INVOICED', name: '未开票', badge: 'error' },
  { id: 'INVOICED', name: '已开票', badge: 'success' }
]

// 账单状态(德邦 顺丰 保险)
const billStatusMaps = [
  { id: 'ALL', name: '全部' },
  { id: 'INIT', name: '初始化', badge: 'processing' },
  { id: 'OVERDUE', name: '已逾期', badge: 'error' },
  { id: 'SETTLED', name: '已结算', badge: 'success' },
  { id: 'NOT_OVERDUE', name: '未逾期', badge: 'warning' }
]

// 保险服务类型枚举
const insuranceTypeMaps = [
  { id: 'COMMON', name: '普通' },
  { id: 'YEAR', name: '年费' }
]

// IIASaaS快递服务类型
const expressTypeMaps = {
  'SAAS-DBL': [
    { id: 'PACKAGE', name: '标准快递', keysort: 'courierDiscount' },
    { id: 'RCP', name: '大件快递360', keysort: 'courierDiscount' },
    { id: 'JZKH', name: '精准卡航', keysort: '--' },
    { id: 'JZQY_LONG', name: '精准汽运', keysort: '--' },
    { id: 'NZBRH', name: '重包入户', keysort: 'logisticsDiscount' },
    { id: 'ZBTH', name: '重包特惠', keysort: 'logisticsDiscount' }
  ],
  'SAAS-SF': [
    { id: '1', name: '顺丰特快（空运）' },
    { id: '2', name: '顺丰标快（陆运）' },
    { id: '155', name: '标准零担' },
    { id: '154', name: '重货包裹' }
  ]
}

// 物流价格对账状态
const dzMap = [
  { id: 'UNKNOWN', name: '未知', badge: 'error' },
  { id: 'NO_SUBMIT', name: '未申请', badge: 'warning' },
  { id: 'YES_SUBMIT', name: '已申请', badge: 'success' }
]

// 对账单提交状态
const expressmoenyMap = [
  { id: 'SUCCESS', name: '是', badge: 'success' },
  { id: 'FAIL', name: '否', badge: 'warning' },
  { id: 'UNABLE_PROCESS', name: '无法计算', badge: 'error' }
]

// 客户初始化

const cusMap = [
  { id: 'ALL', name: '全部', color: 'error' },
  { id: 'UN_INITED', name: '未完成', color: 'red' },
  { id: 'INITED', name: '已完成', badcolorge: 'green' }
]

export default {
  num,
  phone,
  loginnameReg,
  passReg,
  paywordReg,
  phoneReg,
  emailReg,
  cusMap,

  authorMap,
  warrantTypeMap,
  brandTypeMap,
  skuEditMap,
  specialModelMap,
  cloudExamMap,
  paymethodMap,

  trim,
  trimAll,
  CTrim,
  trimLine,
  repLineBreak,
  dzMap,

  supplyPayStatusMap,
  cancelOrderStatusMaps,
  supplySendStatusMap,

  euOrderTypeMap,
  cloudCusPriceAbnormalMaps,
  cardApplyStatusMaps,
  cardLevelMaps,

  systemNoticeObjectMaps,
  notifyTypeMaps,
  notifyReadMaps,

  logisticsWayMaps,
  invoiceOpenedMaps,
  serverInvoiceOpenedMaps,
  billStatusMaps,
  insuranceTypeMaps,
  expressTypeMaps,
  expressmoenyMap
}
