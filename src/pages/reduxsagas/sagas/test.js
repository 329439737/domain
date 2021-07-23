import { call, takeEvery, put } from 'redux-saga/effects'

import axios from 'axios'
// import Api from './../../../'

function * fetchuserr () {
  try {
    const userss = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos/1')
    // console.log('users' + users)
    yield put({ type: 'FETCH_SUCESSS', uu: userss })
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
