<template>
    <span ref="instance" class="default">{{ showNum }}</span>
</template>
    
<script setup>
import { ref, onMounted, watch } from 'vue'
const props = defineProps({
    num: {
        type: Number,
        required: true
    },
    dur: {
        type: Number,
        default: 5000
    },
    del: {
        type: Number,
        default: 0
    },
    className: {
        type: String,
        default: null
    }
})
const showNum = ref(0)
const instance = ref(null)

onMounted(() => {
    if (props.className) {
        instance.value.classList.replace('default', props.className)
    }

    const stepNum = parseInt(props.num / (props.dur / 100))
    setTimeout(() => {
        const timer = setInterval(() => {
            showNum.value += stepNum
        }, 100)
        setTimeout(() => {
            clearInterval(timer)
            showNum.value = props.num
        }, props.dur)
    }, props.del)
})

</script>
<style scoped>
.default {
    font-size: 1.8rem;
}
</style>