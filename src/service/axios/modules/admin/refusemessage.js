import axios from "../../axios.js"
import { setToken, getToken, redirect } from "../../../../utils/admin.js"
export default async (id) => {
    try {
        const result = await axios.post('/admin/refusemessage', { id }, {
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
                redirect()
            } else {
                return false
            }
        }
    } catch (err) {
        return false
    }
}