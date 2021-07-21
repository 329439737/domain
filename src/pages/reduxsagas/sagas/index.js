import { all } from 'redux-saga/effects'
import rootUser from './fetchUser'
import { add } from './counter'
import rootUserr from './test'

export default function * rootSaga () {
  yield all([ // 同时并发多个
    ...rootUser,
    ...rootUserr,
    add()
  ])
}
