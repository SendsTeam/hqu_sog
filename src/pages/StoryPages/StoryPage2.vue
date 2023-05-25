<template>
    <div class="page2">
        hello
    </div>
</template>
    
<script setup>
import { useRouter } from 'vue-router'

//动画以及下一页逻辑
const emit = defineEmits(['enterAniChange', 'leaveAniChange'])
const changeEnterAni = (className) => emit('enterAniChange', className)
const changeLeaveAni = (className) => emit('leaveAniChange', className)
changeLeaveAni('animate__animated animate__fadeOutUp')  // 设置本页离场动画
const router = useRouter()
const nextPage = () => {
    changeEnterAni('animate__animated animate__bounceInDown') //设置下一页入场动画
    router.push('/story/3')
}



</script>
    
<style scoped>
.page2 {
    width: 100%;
    height: 100%;
}
</style>

<style></style>