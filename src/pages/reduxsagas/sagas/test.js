import { call, takeEvery, put } from 'redux-saga/effects'

import axios from 'axios'
// import Api from './../../../'

function * fetchuserr () {
  try {
    const users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos')
    console.log('users' + users)
    yield put({ type: 'FETCH_SUCESS', uu: users })
  } catch (e) {
    yield put({ type: 'FETCH_FAIL', errors: e })
  }
}

function * userr () {
  yield takeEvery('FETCH_REQUESTT', fetchuserr) // 正在加载数据
}

// 使用数组导出
const rootUserr = [
  userr()
]

export default rootUserr
