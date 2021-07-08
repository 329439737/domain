import Ajax from './ajax'

export default {
  saveApplyOnTrail (params) {
    return Ajax.post('/register', params)
  }
}
