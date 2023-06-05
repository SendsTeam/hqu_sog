import axios from "../axios.js"
import { setToken, getToken } from "../../../utils/tokenAndWxlogin.js"
export default async (text) => {
    try {
        const result = await axios.post('/user/wall/submitwish', { text }, {
            headers: {
                token: getToken()
            }
        })
        console.log(result)
        if (result.status !== 200) {
            alert('请求错误！')
            setToken('')
            wxRedirect()
        } else {
            if (result.data.code === 200) {
                return true
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