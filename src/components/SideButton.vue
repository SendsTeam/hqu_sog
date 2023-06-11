<template>
    <button class="nextButton" ref="instance" @click="aniProcess" :disabled="!clickAble">
        <slot></slot>
    </button>
</template>
    
<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
    delayTime: {
        type: Number,
        default: 6000
    },
})
const emit = defineEmits(['bt-click'])
const instance = ref(null)
const clickAble = ref(false)
const aniProcess = () => {
    emit('bt-click')
    clickAble.value = false
    instance.value.classList.replace('nextButton-show', 'nextButton-leave')

}

onMounted(async () => {
    setTimeout(() => {
        instance.value.classList.add('nextButton-show')
        clickAble.value=true
    }, props.delayTime)
})


</script>
    
<style scoped>
.nextButton {
    font-family: fang;
    font-size: 1.2rem;
    color: #A06B9A;
    text-shadow: 0 0 10px #522B29;


    background-color: #f1d476;
    box-shadow: -3px 3px 1px #d1a926;
    position: absolute;
    bottom: 4rem;
    right: -3px;

    height: 4rem;
    width: 8rem;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border: 0;
    text-align: center;
    opacity: 0;
}

.nextButton:active {
    box-shadow: 0 0 1px #d1a926;
    transform: translateY(3px);

}

.nextButton-show {
    animation: .6s fadeIn ease forwards;
}

.nextButton-leave {
    animation: .6s nextButtonAni linear forwards;
}

@keyframes nextButtonAni {
    0% {
        opacity: 1;
        transform: translateX(0);
    }

    100% {
        opacity: 0;
        transform: translateX(100%);
    }
}
</style>