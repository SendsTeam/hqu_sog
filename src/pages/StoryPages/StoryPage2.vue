<template>
    <div class="page2">
        <div class="star-container" />
    </div>
</template>
    
<script setup>
import { useRouter } from 'vue-router'
import StarAni from '../../assets/lotties/star.json'
import { onMounted, onUnmounted } from 'vue'
import lottie from 'lottie-web'

const router = useRouter()
const nextPage = () => {
    router.push('/story/3')
}

let lottieStar = null
onMounted(() => {
    // start lottie
    const containerStar = document.querySelector('.star-container')
    lottieStar = lottie.loadAnimation({
        container: containerStar,
        renderer: "canvas",
        loop: true,
        autoplay: true,
        animationData: StarAni,
    })
})
onUnmounted(() => {
    lottieStar.destroy()
    lottieStar = null
})



</script>
    
<style scoped>
.page2 {
    width: 100%;
    height: 100%;
}

.page2 .star-container {
    position: absolute;
    display: flex;
    z-index: -1;
    opacity: 0;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    animation: fadeIn;
    animation-delay: .5s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
</style>

<style>
/* 固定格式 进出场动画 */
.pageAniEnter2 {
    animation: bounceIn;
    animation-duration: .6s;
}

.pageAniLeave2 {
    animation: fadeOut;
    animation-duration: .6s;
}
</style>