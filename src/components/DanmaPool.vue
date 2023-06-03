<template>
    <div id="danmuPool"></div>
</template>
    
<script setup>
import Danmaku from 'danmaku'
import { onMounted, createApp } from 'vue'
import DanmaItem from './DanmaItem.vue'


onMounted(() => {
    const danmaku = new Danmaku({
        container: document.getElementById('danmuPool'),
        speed: 80
    })
    const comment = {
        render: function () {
            let $div = document.createElement('div')
            const danmaItem = createApp(DanmaItem, { text: '傻狗' })
            danmaItem.mount($div)
            return $div
        },

    }
    setInterval(() => {
        danmaku.emit(comment)
    }, 200)
})
</script>
    
<style scoped>
#danmuPool {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-radius: 25px;
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
}
</style>