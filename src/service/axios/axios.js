import axios from "axios"
const API = 'http://pangu.sends.cc:8889'

axios.defaults.timeout = 5000
axios.defaults.baseURL = API
// axios.defaults.withCredentials = true // 允许携带cookie
axios.defaults.crossDomain = true//允许跨域
export default axios