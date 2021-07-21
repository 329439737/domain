// 使用数组导出函数，就不用一个一个函数导出，优化了代码！

import { call, takeEvery, put } from 'redux-saga/effects'
// import Api from './../../../assets/api/index'

import axios from 'axios'

function * fetchuser () {
  try {
    const users = yield call(axios.get, 'http://www.liulongbin.top:3005/api/getprodlist')
    yield put({ type: 'FETCH_SUCESS', uu: users })
  } catch (e) {
    yield put({ type: 'FETCH_FAIL', errors: e })
  }
}

function * user () {
  yield takeEvery('FETCH_REQUEST', fetchuser) // 正在加载数据
}

// 使用数组导出
const rootUser = [
  user()
]
export default rootUser
