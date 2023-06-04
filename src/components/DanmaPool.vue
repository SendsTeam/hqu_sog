<template>
    <div class="container">
        <div id="danmaPool" />
        <div class="input__container">
            <input type="text" name="text" class="input__search" placeholder="写下你的寄语吧！" v-model="sendContent"
                @keydown.enter="send">
            <div class="shadow__input"></div>
            <button class="input__button__shadow" @click="send">
                <svg t="1685849749215" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="10594" width="20" height="20">
                    <path
                        d="M1008.00076 6.285714q18.857143 13.714286 15.428571 36.571429l-146.285714 877.714286q-2.857143 16.571429-18.285714 25.714286-8 4.571429-17.714286 4.571429-6.285714 0-13.714286-2.857143l-258.857143-105.714286-138.285714 168.571429q-10.285714 13.142857-28 13.142857-7.428571 0-12.571429-2.285714-10.857143-4-17.428571-13.428571t-6.571429-20.857143l0-199.428571 493.714286-605.142857-610.857143 528.571429-225.714286-92.571429q-21.142857-8-22.857143-31.428571-1.142857-22.857143 18.285714-33.714286l950.857143-548.571429q8.571429-5.142857 18.285714-5.142857 11.428571 0 20.571429 6.285714z"
                        p-id="10595"></path>
                </svg>
            </button>
        </div>
    </div>
</template>
    
<script setup>
import Danmaku from 'danmaku'
import { onMounted, createApp, ref } from 'vue'
import DanmaItem from './DanmaItem.vue'

//danmaku
let danmaku = null
const stop = () => {
    danmaku.speed = 1
}
const play = () => [
    danmaku.speed = 50
]
const comment = (text) => {
    return {
        render: function () {
            let $div = document.createElement('div')
            const danmaItem = createApp(DanmaItem, { text })
            const instance = danmaItem.mount($div)
            return $div
        },
    }
}

// send
const sendContent = ref('')
const send = async () => {
    danmaku.emit(comment(sendContent.value))
    sendContent.value = ''
}

onMounted(() => {
    danmaku = new Danmaku({
        container: document.getElementById('danmaPool'),
        speed: 50
    })
    setInterval(() => {
        danmaku.emit(comment('666'))
    }, 300)
})
</script>
    
<style scoped>
.container {
    width: 100%;
    height: 100%;
    /* background-color: #fff; */
}

#danmaPool {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-radius: 25px;
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
    overflow: hidden;
}

.input__container {
    margin-top: 1rem;
    background: rgba(255, 255, 255, 0.664);
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 22px;
    transition: transform 400ms;
    perspective: 500px;
}

.shadow__input {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    filter: blur(30px);
    border-radius: 20px;
    background-color: #999cff;
    background-image: radial-gradient(at 85% 51%, hsla(60, 60%, 61%, 1) 0px, transparent 50%),
        radial-gradient(at 74% 68%, hsla(235, 69%, 77%, 1) 0px, transparent 50%),
        radial-gradient(at 64% 79%, hsla(284, 72%, 73%, 1) 0px, transparent 50%),
        radial-gradient(at 75% 16%, hsla(283, 60%, 72%, 1) 0px, transparent 50%),
        radial-gradient(at 90% 65%, hsla(153, 70%, 64%, 1) 0px, transparent 50%),
        radial-gradient(at 91% 83%, hsla(283, 74%, 69%, 1) 0px, transparent 50%),
        radial-gradient(at 72% 91%, hsla(213, 75%, 75%, 1) 0px, transparent 50%);
}

.input__button__shadow {
    cursor: pointer;
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
}

.input__button__shadow:active {
    background: rgba(255, 255, 255, 0.411);
}

.input__search {
    width: 100%;
    border-radius: 20px;
    outline: none;
    border: none;
    padding: 8px;
    position: relative;
}
</style>