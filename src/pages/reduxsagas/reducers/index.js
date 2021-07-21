import { combineReducers } from 'redux'
import us from './users'
import counter from './counter'
import uss from './test'

export default combineReducers({
  us,
  counter,
  uss
})
