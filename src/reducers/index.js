import {
  SET_USER_INFO
} from './action'

export default function counter (state = {}, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}
