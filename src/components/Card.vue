<template>
    <div class='wrap' @click="console.log(6)">
        <div class="card" ref="card" @click.stop>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="card-inner"></div>
        </div>
    </div>
</template>
    
<script setup>
import { ref } from 'vue'

const card = ref(null)
const status = ref(false)
const cardShow = () => {
    if (card.value.classList)
        card.value.classList.add('card-show')
}
</script>
    
<style scoped>
.wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
}

.card {
    width: 90vw;
    height: 60vh;
    transition: all 0.2s;
    position: absolute;

    left: 5vw;
    top: 20vh;


    -webkit-tap-highlight-color: transparent;
    outline: none;
}

.card-show {
    animation: .6s fadeInDown ease forwards;
    z-index: 999;
}

.card-hide {
    animation: .6s fadeOutUp ease forwards;
    z-index: -1;
}

.card-inner {
    width: inherit;
    height: inherit;
    background: rgba(255, 255, 255, .05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 8px;
}

.card:active {
    transform: scale(1.04) rotate(1deg);
}

.circle {
    width: 100px;
    height: 100px;
    background: radial-gradient(#b0e633, #53ef7d);
    border-radius: 50%;
    position: absolute;
    animation: move-up6 2s ease-in infinite alternate-reverse;
}

.circle:nth-child(1) {
    top: -25px;
    left: -25px;
}

.circle:nth-child(2) {
    bottom: -25px;
    right: -25px;
    animation-name: move-down1;
}

@keyframes move-up6 {
    to {
        transform: translateY(-10px);
    }
}

@keyframes move-down1 {
    to {
        transform: translateY(10px);
    }
}
</style>