<template>
    <span ref="instance" class="default">{{ showNum }}</span>
</template>
    
<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
    num: {
        type: Number,
        required: true
    },
    dur: {
        type: Number,
        default: 5000
    },
    className: {
        type: String,
        default: null
    }
})
const showNum = ref(props.num)
const instance = ref(null)

onMounted(() => {
    if (props.className) {
        instance.value.classList.replace('default', props.className)
    }
    const timer = setInterval(() => {
        showNum.value = Math.floor(Math.random() * props.num)
    }, 100)
    setTimeout(() => {
        clearInterval(timer)
        showNum.value = props.num
    }, props.dur)
})
</script>
<style scoped>
.default {
    font-size: 1.8rem;
}
</style>