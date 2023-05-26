<template>
    <div class="page2">
        <div class="star-container" />
        <div class="teach-container" />

    </div>
</template>
    
<script setup>
import StarAni from '../../assets/lotties/star.json'
import TeachAni from '../../assets/lotties/teacher.json'
import { onMounted, onUnmounted } from 'vue'
import lottie from 'lottie-web'
import { useRouter } from "vue-router"
import { nextPage, lastPage } from '../../utils/move.js'

//router
const router = useRouter()


let lottieInstances = []
onMounted(() => {
    // star lottie
    const containerStar = document.querySelector('.star-container')
    lottieInstances.push(lottie.loadAnimation({
        container: containerStar,
        renderer: "canvas",
        loop: true,
        autoplay: true,
        animationData: StarAni,
    }))

    //teach lottie
    const containerTeach = document.querySelector('.teach-container')
    lottieInstances.push(lottie.loadAnimation({
        container: containerTeach,
        renderer: "canvas",
        loop: true,
        autoplay: true,
        animationData: TeachAni,
    }))

})
onUnmounted(() => {
    lottieInstances.forEach((instance) => {
        instance.destroy()
    })
    lottieInstances = null
})



</script>
    
<style scoped>
.page2 {
    width: 100%;
    height: 100%;
}

.page2 .star-container {
    position: absolute;
    opacity: 0;

    top: 0;
    left: 0;
    bottom: 50%;
    right: 0;
    animation: fadeIn;
    animation-delay: .5s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

.page2 .teach-container {
    position: absolute;
    /* opacity: 0; */

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    /* animation: fadeIn;
    animation-delay: .5s;
    animation-duration: 1s;
    animation-fill-mode: forwards; */

}
</style>

<style>
/* 固定格式 进出场动画 */
.pageAniEnter2 {
    animation: fadeInUp;
    animation-duration: 1s;
}

.pageAniLeave2 {
    animation: fadeOut;
    animation-duration: .6s;
}
</style>