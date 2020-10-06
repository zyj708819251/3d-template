import http from '@utils/http'

export default {
  getListAPI (params) {
    return http.get(`./json/getList.json`, params)
  },
  postFormAPI (params) {
    return http.post(`postForm.json`, params)
  }
}
