import axios from "../../axios.js"
import { setToken } from "../../../../utils/admin.js"
export default async (name, password) => {
    try {
        const result = await axios.post('/admin/login', { name, password })
        if (result.status !== 200) {
            alert('登录请求错误！')
            return false
        } else {
            if (result.data.code === 200) {
                setToken(result.data.data.token)
                return true
            }
            else {
                // alert('登录未知错误!')
                alert(result.data.msg)
                return false
            }
        }
    } catch (err) {
        console.log(err)
        alert('登录未知错误!')
        return false
    }
}