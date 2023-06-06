import axios from "../axios.js"
import { setToken, getToken, wxRedirect } from "../../../utils/tokenAndWxlogin.js"
export default async (text) => {
    try {
        const result = await axios.post('/user/wall/submitwish', { text }, {
            headers: {
                token: getToken()
            }
        })
        if (result.status !== 200) {
            return false
        } else {
            if (result.data.code === 200) {
                return true
            } else if (result.data.code === 401) {
                alert('未登录或登录失效！')
                setToken('')
                wxRedirect()
            } else {
                return false
            }
        }
    } catch (err) {
        alert('许愿发生未知错误！')
        setToken('')
        wxRedirect()
    }
}