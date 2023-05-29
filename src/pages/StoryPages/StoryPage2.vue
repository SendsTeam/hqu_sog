<template>
    <div class="page2">
        <div class="star-container" />
        <div class="teach-container" />
        <div class="sub-title">你数过吗？</div>
        <div class="paragraph1">
            <p class="shouldAni" delayTime="2000">在大学四载间，</p>
            <p class="shouldAni" delayTime="3500">你参与了
                <DanceNumber :num="1000" :dur="5000" className="danceNum1" />场盛装课堂之旅，
            </p>
            <p class="shouldAni" delayTime="5000">饱览了知识的辽阔河山。</p>
        </div>
        <button class="nextButton" @click="next" :disabled="!clickAble">继续 >></button>

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
import DanceNumber from '../../components/DanceNumber.vue'

//router
const router = useRouter()


//next
const clickAble = ref(true)
const next = () => {

}




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
    color: rgb(79, 245, 162);
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

.page2 .nextButton {
    position: absolute;
    bottom: 4rem;
    right: 0;
    height: 3rem;
    width: 5rem;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    border: 0;
    text-align: center;
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


/* 数字 */
.danceNum1 {
    font-size: 2.4rem;
    color: aqua;
    text-shadow: 0 0 5px #ff66f2;
    display: inline-block;

    animation: 2s heartBeat infinite;
    animation-delay: 2.5s;

}
</style>