<template>
    <div class="page1">
        <p class="title">'数'说青春:
            <br /><span class="sub-title">毕业生的成长之旅</span>
        </p>
        <div class="jump-container" />
        <div class="start">
            <button class="start-button" @click.prevent="next" :disabled="!clickAble">开启我的大学时光机</button>
        </div>
        <div class="paper-container" />
    </div>
</template>
    
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import JumpAni from '../../assets/lotties/jumppeople.json'
import PaperAni from '../../assets/lotties/paperplane.json'
import lottie from 'lottie-web'
import { useRouter } from "vue-router"
import { nextPage } from '../../utils/move.js'

//router
const router = useRouter()

//button
const clickAble = ref(true)
const next = () => {
    clickAble.value = false
    const containerJump = document.querySelector('.jump-container')
    containerJump.removeAttribute('style')
    containerJump.classList.add('jump-container-leave')
    document.querySelector('.start-button').classList.add('start-button-leave')
    setTimeout(() => { nextPage(router) }, 1000)
}

//lottie
let lottieInstances = []

onMounted(async () => {

    //jump lottie
    const containerJump = document.querySelector('.jump-container')
    lottieInstances.push(lottie.loadAnimation({
        container: containerJump,
        renderer: "canvas",
        loop: true,
        autoplay: true,
        animationData: JumpAni,
    }))
    setTimeout(() => {
        containerJump.setAttribute("style", "opacity: 1;")
        document.querySelector('.start').setAttribute("style", "opacity: 1;")
        document.querySelector('.title').classList.add('ani-bounce')
    }, 3000)

    //paper plane

})


onUnmounted(() => {
    // lottie unmount
    lottieInstances.forEach((instance) => {
        instance.destroy()
    })
    lottieInstances = null
})

</script>
    
<style scoped>
.page1 {
    width: 100%;
    height: 100%;
    --leave-ani-duration: 1s
}


.page1 .title {
    font-size: 3rem;
    color: rgb(115, 250, 182);
    text-shadow: 0px 0px 10px #e067a4;


    display: inline-block;
    animation: 2s ease CustomFadeInDonw;
}



.ani-bounce {
    animation: 3s linear CustomBounce infinite !important;
}



.page1 .sub-title {
    font-size: 2rem;
    color: rgb(208, 230, 130);
    text-shadow: 3px 3px 2px #e376ec;


    display: inline-block;
    opacity: 0;
    animation: fadeIn;
    animation-duration: 2s;
    animation-delay: 2.5s;
    animation-fill-mode: forwards;
}

.page1 .jump-container {
    position: absolute;
    display: flex;
    z-index: -1;
    opacity: 0;
    align-items: center;
    justify-content: center;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    animation: zoomIn;
    animation-duration: 2s;
    animation-delay: 2.5s;
}

.page1 .jump-container-leave {
    animation: CustomFadeOut !important;
    animation-duration: var(--leave-ani-duration) !important;
    animation-fill-mode: forwards !important;
}



.page1 .start {
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 5vh;
    left: 1rem;
    right: 1rem;
    opacity: 0;
    animation: bounceInUp;
    animation-duration: 2s;
    animation-delay: 2.5s;
}

.page1 .start-button {
    font-size: 1.8rem;
    font-family: fang;
    padding: .5rem;
    border-radius: 2rem;
    border: 0;

    color: #562596;
    background-color: #f1c40f;
    text-shadow: -2px 2px 2px rgb(209 132 0),
        -2px 2px 2px rgb(209 132 0),
        -2px 2px 2px rgb(209 132 0),
        -2px 2px 2px rgb(209 132 0),
        -2px 2px 2px rgb(209 132 0),
        -2px 2px 2px rgb(209 132 0);
    box-shadow: 0 10px 0px 0px #f39c12;
    transition: all .2s;


    animation: 3s linear start-button-dance infinite;
}

.page1 .start-button-leave {
    animation: zoomOut !important;
    animation-duration: var(--leave-ani-duration) !important;
    animation-fill-mode: forwards !important;
}

@keyframes start-button-dance {
    0% {
        transform: scale(1);
    }

    25% {
        transform: scale(1.05);
    }

    50% {
        transform: scale(1);
    }

    75% {
        transform: scale(.95);
    }

    100% {
        transform: scale(1);
    }
}

.page1 .start-button:active {
    background-color: #fcdc5e;
    box-shadow: 0px 1px 0px 0px #f39c12;
    transform: translateY(9px);
}
</style>

<style>
/* 固定格式 进出场动画 */
.pageAniEnter1 {
    animation: fadeIn;
    animation-duration: .6s;
}

.pageAniLeave1 {
    animation: fadeOutUp;
    animation-duration: 1s;
}
</style>
