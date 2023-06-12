<template>
    <div class="page4">
        <div class="star-container" />
        <div class="classRoom-container" />
        <div class="sub-title">想再看看吗？</div>
        <div class="paragraph1">
            <p class="shouldAni" delayTime="2000">上过
                <DanceNumber :num="num" :dur="3000" :del="3000" className="danceNum1" /> 门课的 <span>{{ data.classroom
                }}</span>，
            </p>
            <p class="shouldAni" delayTime="3500">不是困住你的教室‘牢笼’，</p>
            <p class="shouldAni" delayTime="5000">而是伴你最多次数的扬帆之地。</p>
        </div>
        <!-- <button class="nextButton" @click="next" :disabled="!clickAble">继续 >></button> -->
        <SlideButton :delayTime="6000" @bt-click="next">继续 >></SlideButton>

    </div>
</template>
    
<script setup>
import StarAni from '../../assets/lotties/star.json'
import ClassRoomAni from '../../assets/lotties/classroom.json'
import { onMounted, onUnmounted, onBeforeMount, ref } from 'vue'
import lottie from 'lottie-web'
import { useRouter } from "vue-router"
import { nextPage } from '../../utils/move.js'
import { animate } from '../../utils/paraAnimate.js'
import SlideButton from '../../components/SideButton.vue'
import { leaveAni } from '../../utils/leave.js'
import { mostclassroom } from '../../service/axios'
import DanceNumber from '../../components/DanceNumber.vue'

//data
const data = ref({})
const num = ref(99)
onBeforeMount(async () => {
    data.value = await mostclassroom()
    num.value = data.value.total
})

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
    setTimeout(() => { lottieInstances[1].play() }, 5500)

    // paragraph 
    animate('.paragraph1', 'paraAniPage4')


})
onUnmounted(() => {
    lottieInstances.forEach((instance) => {
        instance.destroy()
    })
    lottieInstances = null
})



</script>
    
<style scoped>
.page4 {
    width: 100%;
    height: 100%;
}

.page4 .star-container {
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


.page4 .star-container-leave {
    animation: .6s fadeOut ease !important;
}

.page4 .classRoom-container {
    position: absolute;
    z-index: -1;
    opacity: 0;

    top: 50%;
    left: 0;
    bottom: 0;
    right: 0;

    animation: classRoomCusAni;
    animation-delay: 1.5s;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
}

@keyframes classRoomCusAni {
    from {
        opacity: 0;
        transform: translateX(100%);
    }


    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.page4 .classRoom-container-leave {
    animation: .6s lightSpeedOutLeft ease !important;
}

.page4 .sub-title {
    font-size: 2rem;
    color: #58e492;
    text-shadow: 0px 0px 10px #522B29;


    width: 100%;
    text-align: center;
    animation: 1s pulse infinite;
    animation-delay: 2.5s;
}

.page4 .sub-title-leave {
    animation: .6s slideOutDown ease forwards !important;
}

.page4 .paragraph1 {
    font-size: 1.5rem;
    margin-top: 1rem;
    line-height: 3rem;
}

.page4 .paragraph1 span {
    color: #51D6FF;
    font-size: 2rem;
}

.page4 .paragraph1-leave {
    animation: 3s fadeOutBottomLeft ease forwards !important;
}
</style>

<style>
/* 固定格式 进出场动画 */
.pageAniEnter4 {
    animation: lightSpeedInRight;
    animation-duration: .6s;
}


.pageAniLeave4 {
    animation: flipOutX;
    animation-duration: .6s;
}

.paraAniPage4 {
    animation-name: fadeInTopRight;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
</style>