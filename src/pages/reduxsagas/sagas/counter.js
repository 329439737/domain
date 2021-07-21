import { INCREMENT, INCREMENT_ASYNC } from '../constants/index'
import { delay, call, put, takeEvery } from 'redux-saga/effects'

function * increase () {
  yield delay(1000) // 需要执行异步的时候，直接调用 call
  yield put({ type: INCREMENT })
}

// 直接 export 函数，没有做整理
export function * add () {
  yield takeEvery(INCREMENT_ASYNC, increase)
}
