<template></template>
    
<script setup>

import { onMounted } from 'vue'
import qs from 'qs'

onMounted(() => {
    const AppId = 'wxfe035b066fb1158b' // 测试公众号平台的APPID，第1步那个链接里
    const { code = '' } = qs.parse(window.location.search) // 获取当前页面地址中的code参数的值
    const local = encodeURIComponent(window.location.href)  // 对当前地址用encodeURIComponent进行编码

    // 如果code是''，说明还没有授权，访问下面连接，用户同意授权，获取code
    if (code === '') {
        // window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${AppId}&redirect_uri=${local}&response_type=code&Scope=snsapi_base&state=1#wechat_redirect`
    } else {
        alert(code)
        console.log('获取微信code：', code);
    }
})

</script>
    
<style></style>