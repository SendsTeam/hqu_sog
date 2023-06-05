import axios from "../axios.js"
import { setToken, getToken } from "../../../utils/tokenAndWxlogin.js"
export default async () => {
    try {
        const result = await axios.get('/user/login', {
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
                return result.data.data
            } else {
                alert('未知错误！')
                setToken('')
                wxRedirect()
            }
        }
    } catch (err) {
        alert('未知错误！')
        setToken('')
        wxRedirect()
    }
}