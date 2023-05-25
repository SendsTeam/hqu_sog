<template>
    <div class="story">

        <router-view v-slot="{ Component }">
            <transition mode="out-in" :enter-active-class="enterAni" :leave-active-class="leaveAni">
                <component :is="Component" @enterAniChange="changeEnterAni" @leaveAniChange="changeLeaveAni" />
            </transition>
        </router-view>


    </div>
</template>
    
<script setup>
import { ref } from 'vue'

// animation
const enterAni = ref('animate__animated animate__fadeInUp')
const leaveAni = ref('animate__animated animate__fadeOutUp')

const changeEnterAni = (className) => {
    enterAni.value = className
}

const changeLeaveAni = (className) => {
    leaveAni.value = className
}

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