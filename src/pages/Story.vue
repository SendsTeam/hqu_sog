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
// 路由信息更改时
onBeforeRouteUpdate((to, from, next) => {
    const nextIndex = to.path.match(/\/story\/(\d+)/)[1]
    const nowIndex = from.path.match(/\/story\/(\d+)/)[1]
    enterAni.value = 'pageAniEnter' + nextIndex
    leaveAni.value = 'pageAniLeave' + nowIndex
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