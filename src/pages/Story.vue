<template>
    <div class="story">

        <router-view v-slot="{ Component }">
            <transition mode="out-in" :enter-active-class="enterAni" :leave-active-class="leaveAni">
                <component :is="Component" />
            </transition>
        </router-view>


    </div>
</template>
    
<script setup>
import { ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
// animation
const enterAni = ref('animate__animated animate__fadeInUp')
const leaveAni = ref('animate__animated animate__fadeOutUp')
// 几个页面对应注册几个动画
const allPageAni = [
    { enterAni: '', leaveAni: '' },
    { enterAni: '', leaveAni: '' },
    { enterAni: '', leaveAni: '' }
]
// 路由信息更改时
onBeforeRouteUpdate((to, from, next) => {
    const nextIndex = to.path.match(/\/story\/(\d+)/)[1] - 1
    const nowIndex = from.path.match(/\/story\/(\d+)/)[1] - 1
    enterAni.value = allPageAni[nextIndex].enterAni
    leaveAni.value = allPageAni[nowIndex].leaveAni
    next()
})


</script>
    
<style scoped>
.story {
    padding: 4rem 1rem;
    color: #fff;
    font-size: 1.8rem;
    position: absolute;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
}
</style>
<style>
.slide-enter-active,
.slide-leave-active {
    transition: transform 1s;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-100%);
}
</style>