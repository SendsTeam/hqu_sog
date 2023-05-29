<template>
    <div class="page2">
        <div class="star-container" />
        <div class="teach-container" />
        <div class="sub-title">别来无恙</div>
        <div class="paragraph1">
            <p class="shouldAni" delayTime="1000">在大学四载间，</p>
            <p class="shouldAni" delayTime="2000">你参与了n场盛装课堂之旅，</p>
            <p class="shouldAni" delayTime="3000">饱览了知识的辽阔河山。</p>
        </div>

    </div>
</template>
    
<script setup>
import StarAni from '../../assets/lotties/star.json'
import TeachAni from '../../assets/lotties/teacher.json'
import { ref, onMounted, onUnmounted } from 'vue'
import lottie from 'lottie-web'
import { useRouter } from "vue-router"
import { nextPage, lastPage } from '../../utils/move.js'
import { animate } from '../../utils/paraAnimate.js'

//router
const router = useRouter()

//paragraph
const showStatus = ref(false)


let lottieInstances = []
onMounted(async () => {
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

    // paragraph 
    showStatus.value = true
    animate('.paragraph1')


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
    z-index: -1;
    opacity: 0;

    top: 0;
    left: 0;
    bottom: 50%;
    right: 0;
    animation: fadeIn;
    animation-delay: 1.5s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

.page2 .teach-container {
    position: absolute;
    z-index: -1;
    opacity: 0;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    animation: fadeIn;
    animation-delay: 1.5s;
    animation-duration: 2s;
    animation-fill-mode: forwards;

}

.page2 .sub-title {
    font-size: 2rem;
    color: rgb(245, 79, 190);
    text-shadow: 3px 3px 2px #76b3ec;


    width: 100%;
    text-align: center;
    animation: 1s pulse infinite;
    animation-delay: 2.5s;
}

.page2 .paragraph1 {
    font-size: 1.5rem;
    margin-top: 1rem;
}
</style>

<style>
/* 固定格式 进出场动画 */
.pageAniEnter2 {
    animation: CustomFadeInUp;
    animation-duration: 1s;
}


.pageAniLeave2 {
    animation: fadeOut;
    animation-duration: .6s;
}
</style>