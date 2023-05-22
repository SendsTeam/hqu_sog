<template>
    <div class="story">

        <StoryPage class="page1" :index="1" :binding="pageCounter" transition-name="slide">
            <p class="title">'数'说青春:
                <br /><span class="sub-title">毕业生的成长之旅</span>
            </p>
            <div class="jump-contanier" />
            <div class="start">
                <button class="start-button" @click.prevent="nextPage">开启我的大学时光机</button>
            </div>
        </StoryPage>

        <StoryPage class="page2" :index="2" :binding="pageCounter" transition-name="slide">
            <button @click="nextPage">dfsajdijsa</button>
        </StoryPage>

    </div>
</template>
    
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import jumpPeopleAni from '../assets/lotties/jumppeople.json'
import lottie from 'lottie-web'
import StoryPage from '../components/StoryPage.vue'



// handle page move
const pageCounter = ref(1)
const pageTrans = ref(true)
const nextPage = () => {
    setTimeout(() => {
        pageCounter.value += 1
    }, 300)
}
const lastPage = () => {
    pageCounter.value -= 1
}



const lottieInstances = []

onMounted(() => {

    //page1 jump lottie
    const jumpContainer = document.querySelector('.jump-contanier')
    const jumpLottie = lottie.loadAnimation({
        container: jumpContainer,
        renderer: "canvas",
        loop: true,
        autoplay: true,
        animationData: jumpPeopleAni,
    })
    lottieInstances.push(jumpLottie)
    setTimeout(() => {
        jumpContainer.setAttribute("style", "opacity: 1;")
        document.querySelector('.start').setAttribute("style", "opacity: 1;")
    }, 3000)
})


onUnmounted(() => {
    // lottie unmount
    lottieInstances.forEach((instance) => {
        instance.destroy()
    })
})

</script>
    
<style scoped>
.story {
    padding: 4rem 1rem;
    color: #fff;
    font-size: 1.8rem;
    position: absolute;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
}

.story>div {
    width: 100%;
    height: 100%;
}


.page1 .title {
    font-size: 3rem;
    color: rgb(115, 250, 182);
    text-shadow: 0px 0px 10px #e067a4;


    display: inline-block;
    opacity: 0;
    animation: fadeInDown;
    animation-duration: 1.5s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
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

.page1 .jump-contanier {
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
}

.page1 .start-button:active {
    background-color: #fcdc5e;
    box-shadow: 0px 1px 0px 0px #f39c12;
    transform: translateY(9px);
}


.page2 {
    animation: fadeIn;
    animation-duration: .5s;
}
</style>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: transform 1s;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-100%);
}
</style>