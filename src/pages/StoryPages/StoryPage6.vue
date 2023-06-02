<template>
    <div class="page6">
        <div class="star-container" />
        <div class="classRoom-container" />
        <div class="sub-title">
            还记得吗？
        </div>
        <div class="paragraph1">
            <p class="shouldAni" delayTime="2000">上过xx门课的xxxx，</p>
            <p class="shouldAni" delayTime="3500">不是困住你的教室‘牢笼’，</p>
            <p class="shouldAni" delayTime="5000">而是伴你最多次数的扬帆之地。</p>
            <p class="shouldAni"></p>
        </div>
        <!-- <button class="nextButton" @click="next" :disabled="!clickAble">继续 >></button> -->
        <SlideButton :delayTime="6000" @bt-click="next">继续 >></SlideButton>

    </div>
</template>
    
<script setup>
import StarAni from '../../assets/lotties/star.json'
import ClassRoomAni from '../../assets/lotties/sunandmoon.json'
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
    leaveAni('classRoom-container')
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

    //classRoom lottie
    const containerClassRoom = document.querySelector('.classRoom-container')
    lottieInstances.push(lottie.loadAnimation({
        container: containerClassRoom,
        renderer: "canvas",
        loop: true,
        autoplay: false,
        animationData: ClassRoomAni,
    }))
    setTimeout(() => {
        lottieInstances[1].play()
    }, 5500)

    // paragraph 
    animate('.paragraph1', 'paraAniPage6')


})
onUnmounted(() => {
    lottieInstances.forEach((instance) => {
        instance.destroy()
    })
    lottieInstances = null
})



</script>
    
<style scoped>
.page6 {
    width: 100%;
    height: 100%;
}

.page6 .star-container {
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


.page6 .star-container-leave {
    animation: .6s fadeOut ease !important;
}

.page6 .classRoom-container {
    position: absolute;
    z-index: -1;
    opacity: 0;

    top: 4rem;
    left: 0;
    bottom: 0;
    right: 0;

    animation: classRoomCusAni;
    animation-delay: 1.5s;
    animation-duration: 2s;
    animation-fill-mode: forwards;

}


@keyframes classRoomCusAni {
    0% {
        opacity: 0;
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.page6 .classRoom-container-leave {
    animation: .6s lightSpeedOutLeft ease !important;
}

.page6 .sub-title {
    font-size: 2rem;
    color: rgb(79, 245, 162);
    text-shadow: 3px 3px 2px #76b3ec;


    width: 100%;
    text-align: center;
    animation: 1s pulse infinite;
    animation-delay: 2.5s;
}

.page6 .sub-title-leave {
    animation: .6s slideOutDown ease forwards !important;
}

.page6 .paragraph1 {
    font-size: 1.5rem;
    margin-top: 1rem;
    line-height: 3rem;
}

.page6 .paragraph1-leave {
    animation: 3s fadeOutBottomLeft ease forwards !important;
}
</style>

<style>
/* 固定格式 进出场动画 */
.pageAniEnter6 {
    animation: lightSpeedInRight;
    animation-duration: .6s;
}


.pageAniLeave6 {
    animation: flipOutX;
    animation-duration: .6s;
}

.paraAniPage6 {
    animation-name: fadeInTopRight;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
</style>