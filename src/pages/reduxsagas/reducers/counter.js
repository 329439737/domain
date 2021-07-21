import { INCREMENT, INCREMENT_ASYNC, REDUCE } from '../constants/index'

const counter = (state = 1, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1

    case REDUCE:
      return state - 1

    case 'TEST':

      return Object.assign([], action.data)

    case INCREMENT_ASYNC:
      return state + 10
    default: return state
  }
}

export default counter
