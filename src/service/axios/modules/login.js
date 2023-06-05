import axios from "../axios.js"
import { wxRedirect, setToken } from "../../../utils/tokenAndWxlogin.js"
export default async (code) => {
    try {
        const result = await axios.post('/user/login', { code })
        if (result.status !== 200) {
            alert('请求错误！')
            wxRedirect()
        } else {
            if (result.data.code === 200) {
                setToken(result.data.data.token)
                console.log(token)
            } else if (result.data.code === -2) {   //未绑定学号
                alert(result.data.msg)
                window.location.href('wx.sends.cc/temporary/bind')
            } else if (result.data.code === -1) {  //登录异常
                alert(result.data.msg)
                wxRedirect()
            } else {
                alert('未知错误！')
                wxRedirect()
            }
        }
    } catch (err) {
        console.log(err)
        wxRedirect()
    }
}