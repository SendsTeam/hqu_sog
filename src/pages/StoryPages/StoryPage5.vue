<template>
    <div class="page5">
        <div class="star-container" />
        <div class="manTeacher-container" />
        <div class="sub-title">想再听听吗？</div>
        <div class="paragraph1">
            <p class="shouldAni" delayTime="2000">xxx 老师，</p>
            <p class="shouldAni" delayTime="3500">教给你的可能不只是xxxx，xxxx</p>
            <p class="shouldAni" delayTime="5000">这x门课的知识，</p>
            <p class="shouldAni" delayTime="6500">可能还有ta的人生哲理。</p>
        </div>
        <!-- <button class="nextButton" @click="next" :disabled="!clickAble">继续 >></button> -->
        <SlideButton :delayTime="7000" @bt-click="next">继续 >></SlideButton>

    </div>
</template>
    
<script setup>
import StarAni from '../../assets/lotties/star.json'
import ManTeacherAni from '../../assets/lotties/manteacher.json'
import { onMounted, onUnmounted } from 'vue'
import lottie from 'lottie-web'
import { useRouter } from "vue-router"
import { nextPage } from '../../utils/move.js'
import { animate } from '../../utils/paraAnimate.js'
import SlideButton from '../../components/SideButton.vue'
import { leaveAni } from '../../utils/leave.js'

//router
const router = useRouter()


//next
const next = async () => {
    leaveAni('manTeacher-container')
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

    //manTeacher lottie
    const containerManTeacher = document.querySelector('.manTeacher-container')
    lottieInstances.push(lottie.loadAnimation({
        container: containerManTeacher,
        renderer: "canvas",
        loop: true,
        autoplay: false,
        animationData: ManTeacherAni,
    }))
    setTimeout(() => { lottieInstances[1].play() }, 7000)

    // paragraph 
    animate('.paragraph1', 'paraAniPage5')


})
onUnmounted(() => {
    lottieInstances.forEach((instance) => {
        instance.destroy()
    })
    lottieInstances = null
})



</script>
    
<style scoped>
.page5 {
    width: 100%;
    height: 100%;
}

.page5 .star-container {
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


.page5 .star-container-leave {
    animation: .6s fadeOut ease !important;
}

.page5 .manTeacher-container {
    position: absolute;
    z-index: -1;
    opacity: 0;

    top: 4rem;
    left: 0;
    bottom: 0;
    right: 0;

    animation: manTeacherCusAni;
    animation-delay: 1.5s;
    animation-duration: 2s;
    animation-fill-mode: forwards;

}

@keyframes manTeacherCusAni {
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.page5 .manTeacher-container-leave {
    animation: .6s fadeOutRight ease !important;
}

.page5 .sub-title {
    font-size: 2rem;
    color: rgb(79, 245, 162);
    text-shadow: 3px 3px 2px #76b3ec;


    width: 100%;
    text-align: center;
    animation: 1s pulse infinite;
    animation-delay: 2.5s;
}

.page5 .sub-title-leave {
    animation: .6s fadeOutRight ease forwards !important;
}

.page5 .paragraph1 {
    font-size: 1.5rem;
    margin-top: 1rem;
    line-height: 3rem;
}

.page5 .paragraph1-leave {
    animation: 3s fadeOutRight ease forwards !important;
}
</style>

<style>
/* 固定格式 进出场动画 */
.pageAniEnter5 {
    animation: fadeInDownBig;
    animation-duration: .6s;
}


.pageAniLeave5 {
    animation: flipOutX;
    animation-duration: .6s;
}

.paraAniPage5 {
    animation-name: fadeInLeft;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
</style>