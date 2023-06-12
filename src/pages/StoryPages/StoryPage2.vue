<template>
    <div class="page2">
        <div class="star-container" />
        <div class="teach-container" />
        <div class="sub-title">你知道吗？</div>
        <div class="paragraph1">
            <p class="shouldAni" delayTime="2000">在大学四载间，</p>
            <p class="shouldAni" delayTime="3500">你参与了
                <DanceNumber :num="num" :dur="3000" :del="3000" className="danceNum1" />场盛装课堂之旅，
            </p>
            <p class="shouldAni" delayTime="5000">饱览了知识的辽阔河山。</p>
        </div>
        <!-- <button class="nextButton" @click="next" :disabled="!clickAble">继续 >></button> -->
        <SlideButton :delayTime="6000" @bt-click="next">继续 >></SlideButton>

    </div>
</template>
    
<script setup>
import StarAni from '../../assets/lotties/star.json'
import TeachAni from '../../assets/lotties/teacher.json'
import { onMounted, onUnmounted, onBeforeMount, ref } from 'vue'
import lottie from 'lottie-web'
import { useRouter } from "vue-router"
import { nextPage } from '../../utils/move.js'
import { animate } from '../../utils/paraAnimate.js'
import DanceNumber from '../../components/DanceNumber.vue'
import SlideButton from '../../components/SideButton.vue'
import { leaveAni } from '../../utils/leave.js'
import { countcourse } from '../../service/axios'



// data
const num = ref(99)
onBeforeMount(async () => {
    num.value = await countcourse()
})


//router
const router = useRouter()


//next
const next = async () => {
    leaveAni('teach-container')
    leaveAni('star-container')
    leaveAni('sub-title')
    leaveAni('paragraph1')
    setTimeout(() => { nextPage(router) }, 1000)
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
        autoplay: false,
        animationData: TeachAni,
    }))
    setTimeout(() => { lottieInstances[1].play() }, 5500)

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

.page2 .star-container-leave {
    animation: .6s fadeOut ease !important;
}

.page2 .teach-container {
    position: absolute;
    z-index: -1;
    opacity: 0;

    top: 50%;
    left: 0;
    bottom: 0;
    right: 0;

    animation: fadeIn;
    animation-delay: 1.5s;
    animation-duration: 2s;
    animation-fill-mode: forwards;

}

.page2 .teach-container-leave {
    animation: .6s fadeOut ease !important;
}

.page2 .sub-title {
    font-size: 2rem;
    color: #58e492;
    text-shadow: 0px 0px 10px #522B29;


    width: 100%;
    text-align: center;
    animation: 1s pulse infinite;
    animation-delay: 2.5s;
}

.page2 .sub-title-leave {
    animation: .6s backOutUp ease forwards !important;
}

.page2 .paragraph1 {
    font-size: 1.5rem;
    margin-top: 1rem;
    line-height: 3rem;
    color: snow;
    /* background-color: rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px; */
}

.page2 .paragraph1-leave {
    animation: 3s zoomOut ease forwards !important;
}
</style>

<style>
/* 固定格式 进出场动画 */
.pageAniEnter2 {
    animation: CustomFadeInUp;
    animation-duration: .6s;
}


.pageAniLeave2 {
    animation: fadeOut;
    animation-duration: .6s;
}


/* 数字 */
.danceNum1 {
    font-size: 2.4rem;
    color: #51D6FF;
    text-shadow: 0 0 5px #A06B9A;
    display: inline-block;

    animation: 2s heartBeat infinite;
    animation-delay: 5.5s;

}
</style>