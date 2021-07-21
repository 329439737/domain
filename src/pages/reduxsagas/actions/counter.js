import { INCREMENT, INCREMENT_ASYNC, REDUCE } from '../constants/index'

export const increate = () => {
  return {
    type: INCREMENT
  }
}

export const reduce = () => {
  return {
    type: REDUCE
  }
}

export const test = (data) => {
  return {
    type: 'TEST',
    data
  }
}

export const increateAsync = () => {
  return {
    type: INCREMENT_ASYNC
  }
}

export const fetchuser = () => {
  return {
    type: 'FETCH_REQUEST'
  }
}

export const fetchuserr = () => {
  return {
    type: 'FETCH_REQUESTT'
  }
}
