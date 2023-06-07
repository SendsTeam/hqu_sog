<template>
    <div class="container">
        <div id="danmaPool">
            <vue-danmaku ref="danmakuInstance" id="danmaku" v-model:danmus="danmaku" useSlot :speeds="40"
                :randomChanne="true">
                <template v-slot:dm="{ danmu }">
                    <DanmaItem :text="danmu.text" :my="danmu.stu_num === userinfo.stu_num" :tx="danmu.avatar"
                        :nickname="danmu.nickname" :stunum="danmu.stu_num" />
                </template>
            </vue-danmaku>
        </div>
        <div class="input__container">
            <input type="text" name="text" class="input__search" placeholder="写下你的寄语吧！" v-model="sendContent"
                @keydown.enter="send">
            <div class="shadow__input"></div>
            <button class="input__button__shadow" @click="send">
                <img src="../assets/svg/send.svg" alt="send" />
            </button>
        </div>
    </div>
</template>
    
<script setup>
import vueDanmaku from 'vue3-danmaku'
import { onMounted, ref, inject } from 'vue'
import { randmessage, submitwish } from '../service/axios'
import DanmaItem from './DanmaItem.vue'


//abou me
const userinfo = inject('userinfo')


//danmaku
const danmaku = ref([])
const danmakuInstance = ref(null)
const updateDanmaku = async () => {
    const result = await randmessage()
    if (result) {
        result.forEach(element => {
            danmakuInstance.value.push(element)
        })
    }
}



const sendContent = ref('')
const send = async () => {
    if (!sendContent.value) return
    if (await submitwish(sendContent.value)) {
        danmakuInstance.value.add({
            text: sendContent.value,
            avatar: userinfo.value.avatar,
            nickname: userinfo.value.nickname,
            stu_num: userinfo.value.stu_num
        })
        sendContent.value = ''
    }
}

onMounted(async () => {
    //danmu init

    const result = await randmessage()
    if (result) {
        result.forEach(element => {
            danmakuInstance.value.push(element)
        })
    }

    setInterval(() => {
        updateDanmaku()
    }, 1000)
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


#danmaku {
    width: 100%;
    height: 100%;
}
</style>