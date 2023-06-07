import axios from "../../axios.js"
import { setToken, getToken, redirect } from "../../../../utils/admin.js"
export default async () => {
    try {
        const result = await axios.get('/admin/getallmessage', {
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
                redirect()
            } else {
                return []
            }
        }
    } catch (err) {
        alert('获取数据未知错误！请刷新重试')
        // setToken('')
        // wxRedirect()
        return []
    }
}