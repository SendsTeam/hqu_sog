const setToken = (token) => {
    localStorage.setItem('HQU_SOG', token)
}

const getToken = () => {
    try {
        return localStorage.getItem('HQU_SOG')
    } catch {
        return null
    }
}

const isLogin = () => {
    const token = getToken()
    if (!token || token === '') return false
    console.log("token: ",token)
    return true
}

const wxRedirect = () => {
    window.location.href = `https://apps.hqu.edu.cn/wechat-hqu/wechatauth.html?proxyTo=authoauth&sendUrl=/connect/oauth2/authorize?appid=wxfe035b066fb1158b&redirect_uri=${encodeURIComponent(`${document.location.origin}`)}&encode_flag=Y&response_type=code&scope=snsapi_userinfo#wechat_redirect`
}

const isInWechat = () => {
    return window.navigator.userAgent.includes('MicroMessenger')
}

const getWechatCode = () => {
    const searchParams = new URLSearchParams(location.search)
    return searchParams.get('code')
}



export {
    setToken, getToken, isLogin, wxRedirect, isInWechat, getWechatCode
}
