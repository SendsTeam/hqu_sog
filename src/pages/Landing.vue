<template></template>
    
<script setup>
//判断登录等逻辑
import { useRouter } from 'vue-router'
import { onMounted, inject } from 'vue'
import { wxRedirect, isLogin, getWechatCode } from '../utils/tokenAndWxlogin'
import { login, getinfo } from '../service/axios'

const router = useRouter()
const userinfo = inject('userinfo')

onMounted(() => {
    // login and userinfo
    if (!isLogin()) {
        const wechatCode = getWechatCode()
        if (wechatCode) {
            login(wechatCode)
            userinfo.value = getinfo()
            router.push('/wish')
        } else {
            wxRedirect()
        }
    } else {
        userinfo.va1ue = getinfo()
        console.log(userinfo)
        router.push('/story')
    }
})

</script>