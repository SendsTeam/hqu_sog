const setToken = (token) => {
    localStorage.setItem('HQU_SOG_ADMIN', token)
}

const getToken = () => {
    try {
        return localStorage.getItem('HQU_SOG_ADMIN')
    } catch {
        return null
    }
}

const isLogin = () => {
    const token = getToken()
    if (!token || token === '') return false
    console.log("admin_token: ", token)
    return true
}

const redirect = () => {
    window.location.href = window.location.origin + "/adminlogin"
}

export {
    setToken, getToken, isLogin, redirect
}