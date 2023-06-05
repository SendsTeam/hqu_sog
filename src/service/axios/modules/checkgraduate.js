import axios from "../axios.js"
import { setToken, getToken } from "../../../utils/tokenAndWxlogin.js"
export default async () => {
    try {
        const result = await axios.get('/user/checkgraduate', {
            headers: {
                token: getToken()
            }
        })
        if (result.status !== 200) {
            alert('请求错误！')
            setToken('')
            wxRedirect()
        } else {
            if (result.data.code === 200) {
                return true
            } else {
                return false
            }
        }
    } catch (err) {
        alert('未知错误！')
        setToken('')
        wxRedirect()
    }
}