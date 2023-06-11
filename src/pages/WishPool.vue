<template>
    <div class="wish">
        <div class="title">
            毕业季许愿池
        </div>
        <div class="nav">
            <transition enter-active-class="animate__animated animate__fadeIn">
                <button v-if="isGraduate" class="nav_button__shadow story" type="button" @click="storyButton">
                    我的故事
                </button>
            </transition>

            <!-- <button class="nav_button__shadow my-danma" type="button">
                我的弹幕
            </button> -->
        </div>
        <div class="danmuPool">
            <DanmaPool />
        </div>

        <!-- <Card /> -->
    </div>
    <div class="mask" v-if="loadingSuccess" />
</template>
    
<script setup>
import DanmaPool from '../components/DanmaPool.vue'
import Card from '../components/Card.vue'
import { inject, onBeforeMount, ref } from 'vue'
import { getinfo, checkgraduate, checkstory } from '../service/axios'
import { useRouter } from 'vue-router'

const loadingSuccess = inject('loadingSuccess')
const router = useRouter()
//userinfo checkgraduate
const userinfo = inject('userinfo')
const isGraduate = ref(false)
onBeforeMount(async () => {
    if (!userinfo.value) {
        userinfo.value = await getinfo()
    }
    isGraduate.value = await checkgraduate()
    if (isGraduate.value) {
        const isStoryInit = await checkstory()
        // alert(JSON.stringify(isStoryInit))
        if (!isStoryInit) { router.push('/story') }
    }
})


// story-button
const storyButton = () => {
    router.push('/story')
}


</script>
    
<style scoped>
.wish {
    padding: 4rem 1rem;
    color: #fff;
    font-size: 1.8rem;
    position: absolute;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;

    animation: 1s fadeInUp ease;
}

.title {
    position: absolute;
    top: 3rem;
    left: 1rem;
    right: 1rem;
    text-align: center;

    font-size: 1.8rem;
    color: #51D6FF;
    text-shadow: 1px 1px 5px #522B29;

}


.danmuPool {
    position: absolute;
    top: 6rem;
    left: .5rem;
    right: .5rem;
    bottom: 6rem;
}

.nav_button__shadow {
    border: none;
    background: none;
    transition: transform 400ms, background 400ms;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    padding: 5px;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    color: #fff;
    font-size: 1.2rem;
    font-family: fang;

    background-color: rgba(255, 255, 255, 0.11);
}

.nav_button__shadow:active {
    background: rgba(255, 255, 255, 0.411);
}

.story {
    position: absolute;
    top: 3rem;
    left: .5rem;
    z-index: 99;
}

.my-danma {
    position: absolute;
    top: 3rem;
    right: .5rem;
    z-index: 99;
}

.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.26);
    /* 设置透明度 */
    z-index: 99;
    /* 设置遮罩层的层级 */
    pointer-events: none;
    /* 防止遮挡下方元素的交互 */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    animation: 3s maskHide ease forwards;
    animation-delay: 2s;
}

@keyframes maskHide {
    99% {
        opacity: 0.01;
        z-index: 99;
    }

    100% {
        opacity: 0;
        z-index: -1;
    }
}
</style>