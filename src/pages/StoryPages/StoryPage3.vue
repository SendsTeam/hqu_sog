<template>
    <div class="page3">
        <div class="star-container" />
        <div class="book-container" />
        <div class="sub-title">想回到过去吗？</div>
        <div class="paragraph1">
            <p class="shouldAni" delayTime="2000">你在进入大学的第 <span>{{ data.start_week }}</span> 周，</p>
            <p class="shouldAni" delayTime="3500"><span>{{ data.teacher }}</span> 老师的 <span>{{ data.coursename }}</span> 课上，
            </p>
            <p class="shouldAni" delayTime="5000">翻开了在HQU的‘序章’！</p>
        </div>
        <!-- <button class="nextButton" @click="next" :disabled="!clickAble">继续 >></button> -->
        <SlideButton :delayTime="6000" @bt-click="next">继续 >></SlideButton>

    </div>
</template>
    
<script setup>
import StarAni from '../../assets/lotties/star.json'
import BookAni from '../../assets/lotties/book.json'
import { onMounted, onUnmounted, onBeforeMount, ref } from 'vue'
import lottie from 'lottie-web'
import { useRouter } from "vue-router"
import { nextPage } from '../../utils/move.js'
import { animate } from '../../utils/paraAnimate.js'
import SlideButton from '../../components/SideButton.vue'
import { leaveAni } from '../../utils/leave.js'
import { firstcourse } from '../../service/axios'

//data
const data = ref({})
onBeforeMount(async () => {
    data.value = await firstcourse()
})

//router
const router = useRouter()


//next
const next = async () => {
    leaveAni('book-container')
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

    //book lottie
    const containerBook = document.querySelector('.book-container')
    lottieInstances.push(lottie.loadAnimation({
        container: containerBook,
        renderer: "canvas",
        loop: true,
        autoplay: false,
        animationData: BookAni,
    }))
    setTimeout(() => { lottieInstances[1].play() }, 5500)

    // paragraph 
    animate('.paragraph1', 'paraAniPage3')


})
onUnmounted(() => {
    lottieInstances.forEach((instance) => {
        instance.destroy()
    })
    lottieInstances = null
})



</script>
    
<style scoped>
.page3 {
    width: 100%;
    height: 100%;
}

.page3 .star-container {
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

.page3 .star-container-leave {
    animation: .6s fadeOut ease !important;
}

.page3 .book-container {
    position: absolute;
    z-index: -1;
    opacity: 0;

    top: 4rem;
    left: 0;
    bottom: 0;
    right: 0;

    animation: fadeIn;
    animation-delay: 1.5s;
    animation-duration: 2s;
    animation-fill-mode: forwards;

}

.page3 .book-container-leave {
    animation: .6s lightSpeedOutLeft ease !important;
}

.page3 .sub-title {
    font-size: 2rem;
    color: #37FF8B;
    text-shadow: 3px 3px 2px #51D6FF;


    width: 100%;
    text-align: center;
    animation: 1s pulse infinite;
    animation-delay: 2.5s;
}

.page3 .sub-title-leave {
    animation: .6s backOutUp ease forwards !important;
}

.page3 .paragraph1 {
    font-size: 1.5rem;
    margin-top: 1rem;
    line-height: 3rem;
    color: snow;
}

.page3 .paragraph1 span {
    color: #522B29;
    font-size: 2rem;
}

.page3 .paragraph1-leave {
    animation: 3s flipOutX ease forwards !important;
}
</style>

<style>
/* 固定格式 进出场动画 */
.pageAniEnter3 {
    animation: flipInY;
    animation-duration: .6s;
}


.pageAniLeave3 {
    animation: flipOutX;
    animation-duration: .6s;
}

.paraAniPage3 {
    animation-name: bounceIn;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
</style>