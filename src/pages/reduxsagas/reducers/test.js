const initialState = {
  isFetch: false,
  error: null,
  user: null
}

const u = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_REQUESTT':
      return {
        isFetch: true,
        error: null,
        user: null
      }
    case 'FETCH_SUCESSS':
      return {
        isFetch: false,
        error: null,
        user: action.uu
      }
    case 'FETCH_FAIL':
      return {
        isFetch: false,
        error: action.errors,
        user: null
      }

    default :
      return state
  }
}

export default u
