import axios from "../axios.js"
import { setToken, getToken, wxRedirect } from "../../../utils/tokenAndWxlogin.js"
export default async () => {
    try {
        const result = await axios.get('/user/wall/randmessage', {
            headers: {
                token: getToken()
            }
        })
        if (result.status !== 200) {
            return []
        } else {
            if (result.data.code === 200) {
                return result.data.data
            } else if (result.data.code === 401) {
                alert('未登录或登录失效！')
                setToken('')
                wxRedirect()
            } else {
                return []
            }
        }
    } catch (err) {
        // alert('获取弹幕未知错误！')
        // setToken('')
        // wxRedirect()
        return []
    }
}