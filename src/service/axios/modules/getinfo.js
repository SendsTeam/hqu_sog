import axios from "../axios.js"
import { setToken, getToken, wxRedirect } from "../../../utils/tokenAndWxlogin.js"
export default async () => {
    try {
        const result = await axios.get('/user/getinfo', {
            headers: {
                token: getToken()
            }
        })
        if (result.status !== 200) {
            alert('获取用户数据请求错误！')
            setToken('')
            wxRedirect()
        } else {
            if (result.data.code === 200) {
                return result.data.data
            } else if (result.data.code === 401) {
                alert('未登录或登录失效！')
                setToken('')
                wxRedirect()
            }
            else {
                // alert('获取用户数据未知错误！')
                setToken('')
                wxRedirect()
            }
        }
    } catch (err) {
        // alert('获取用户数据未知错误！')
        setToken('')
        wxRedirect()
    }
}