<template>
    <div class="page6">
        <div class="star-container" />
        <div class="sunandmoon-container" />
        <div class="cert-container" />

        <div class="sub-title">
            还记得吗？
        </div>
        <div class="paragraph1">
            <p class="shouldAni" delayTime="2000">陪你最早的，不止是晨间的氤氲，</p>
            <p class="shouldAni" delayTime="3500">还有
                <DanceNumber :num="num1" :dur="3000" :del="4000" className="danceNum1" /> 次的早八；
            </p>
            <p class="shouldAni" delayTime="5000">陪你最晚的，不止是夜间的繁星，</p>
            <p class="shouldAni" delayTime="6500">还有
                <DanceNumber :num="num2" :dur="3000" :del="7000" className="danceNum1" /> 次的晚十。
            </p>
        </div>
        <!-- <button class="nextButton" @click="next" :disabled="!clickAble">继续 >></button> -->
        <div class="goWish">
            <button class="btn boom" @click="next" :disabled="!buttonClickAble">前往许愿池</button>
        </div>
        <div class="celebration">
            毕业快乐！
        </div>
    </div>
</template>
    
<script setup>
import StarAni from '../../assets/lotties/star.json'
import SunAndMoonAni from '../../assets/lotties/sunandmoon.json'
import CeritificateAni from '../../assets/lotties/certificate.json'
import { onMounted, onUnmounted, ref, onBeforeMount } from 'vue'
import lottie from 'lottie-web'
import { useRouter } from "vue-router"
import { animate } from '../../utils/paraAnimate.js'
import { leaveAni } from '../../utils/leave.js'
import { eightten, storyinit } from '../../service/axios'
import DanceNumber from '../../components/DanceNumber.vue'

//data
const data = ref({})
const num1 = ref(99)
const num2 = ref(99)
onBeforeMount(async () => {
    data.value = await eightten()
    // alert(JSON.stringify(data.value))
    if (data.value !== {}) {
        num1.value = data.value.eight_num
        num2.value = data.value.ten_num
    }
})

//router
const router = useRouter()


//next
const next = async () => {
    await storyinit()
    leaveAni('sunandmoon-container')
    leaveAni('star-container')
    leaveAni('sub-title')
    leaveAni('paragraph1')
    leaveAni('goWish')
    setTimeout(() => {
        lottieInstances[2].play()
        document.querySelector('.celebration').classList.add('show')
        setTimeout(() => {
            leaveAni('celebration')
            leaveAni('cert-container')
            setTimeout(() => { router.push('/wish') }, 1000)
        }, 2000)
    }, 2000)

}




let lottieInstances = []
let buttonClickAble = ref(false)
onMounted(async () => {
    // button
    setTimeout(() => { buttonClickAble.value = true }, 7000)

    // star lottie
    const containerStar = document.querySelector('.star-container')
    lottieInstances.push(lottie.loadAnimation({
        container: containerStar,
        renderer: "canvas",
        loop: true,
        autoplay: true,
        animationData: StarAni,
    }))

    //sunandmoon lottie
    const containerSunAndMoon = document.querySelector('.sunandmoon-container')
    lottieInstances.push(lottie.loadAnimation({
        container: containerSunAndMoon,
        renderer: "canvas",
        loop: true,
        autoplay: false,
        animationData: SunAndMoonAni,
    }))
    setTimeout(() => {
        lottieInstances[1].play()
    }, 5500)

    //certificate lottie
    const containerCert = document.querySelector('.cert-container')
    lottieInstances.push(lottie.loadAnimation({
        container: containerCert,
        renderer: "canvas",
        loop: false,
        autoplay: false,
        animationData: CeritificateAni,
    }))

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

.page6 .sunandmoon-container {
    position: absolute;
    z-index: -1;
    opacity: 0;

    top: 50%;
    left: 0;
    bottom: 0;
    right: 0;

    animation: fadeInUpBig;
    animation-delay: 1.5s;
    animation-duration: 2s;
    animation-fill-mode: forwards;

}


.page6 .sunandmoon-container-leave {
    animation: .6s fadeOutUp ease !important;
}

.page6 .sub-title {
    font-size: 2rem;
    color: #58e492;
    text-shadow: 0px 0px 10px #522B29;


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
    animation: 3s flipOutX ease forwards !important;
}


.page6 .goWish {
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 5vh;
    left: 1rem;
    right: 1rem;
    opacity: 0;
    z-index: 99;

    animation-name: fadeIn;
    animation-delay: 7s;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}

.page6 .goWish-leave {
    animation-name: fadeOutUp !important;
    animation-duration: 2s !important;
    animation-fill-mode: forwards !important;
}


.btn {
    width: 200px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 20px;
    box-sizing: border-box;
    border: 0;
}

.boom {
    background-color: #16a044;
    color: #fff;
    position: relative;
    z-index: 1;
}

.boom::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 20px;
    transform-origin: center;
}

.boom:active::before {
    transform: scale(1.25);
    transition: all ease-out .5s;
    border: 1px solid #96f3e0;
    opacity: 0;
}


.page6 .cert-container {
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.page6 .cert-container-leave {
    animation: 1s fadeOutDown forwards !important;
}

.page6 .celebration {
    opacity: 0;
    position: absolute;
    top: 4rem;
    z-index: 999;

    font-size: 4rem;
    color: #37FF8B;
    text-shadow: 3px 3px 2px #51D6FF;


    width: 100%;
    text-align: center;
    animation: 1s pulse infinite;
    animation-delay: 2.5s;
}

.show {
    opacity: 1 !important;
}

.page6 .celebration-leave {
    animation: 1s fadeOutUp forwards !important;
    animation-delay: 0 !important;
}
</style>

<style>
/* 固定格式 进出场动画 */
.pageAniEnter6 {
    animation: backInUp;
    animation-duration: .6s;
}


.pageAniLeave6 {
    animation: flipOutX;
    animation-duration: .6s;
}

.paraAniPage6 {
    animation-name: fadeInUp;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
</style>