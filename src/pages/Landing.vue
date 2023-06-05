<template></template>
    
<script setup>
//判断登录等逻辑
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { wxRedirect, isLogin, getWechatCode } from '../utils/tokenAndWxlogin'
import { login } from '../service/axios'

const router = useRouter()
onMounted(() => {
    //login and userinfo
    if (!isLogin()) {
        const wechatCode = getWechatCode()
        if (!wechatCode) {
            wxRedirect()
        } else {
            login(wechatCode)
        }
    } else {

    }
})

</script>