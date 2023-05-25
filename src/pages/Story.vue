<template>
    <div class="story">

        <router-view v-slot="{ Component }">
            <transition mode="out-in" :enter-active-class="'animate__animated animate__' + enterAni"
                :leave-active-class="'animate__animated animate__' + leaveAni">
                <component :is="Component" :enterAni="enterAni" />
            </transition>
        </router-view>


    </div>
</template>
    
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const enterAni = ref('fadeInUp')
const leaveAni = ref('fadeOutUp')

onMounted(() => {


})

onUnmounted(() => {

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