let statee = {
  count: 1
}
export default (state = statee, action) => {
  switch (action.type) {
    case 'add':
      state.count++
      return {
        count: state.count
      }
    case 'jj':
      state.count--
      return {
        count: state.count
      }

    default :
      return state
  }
}
