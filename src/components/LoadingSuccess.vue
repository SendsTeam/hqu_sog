<template>
    <div class="success-container">
        <div ref="lottieRef"></div>
    </div>
</template>
    
<script setup>
import lottie from "lottie-web"
import successAnim from "../assets/lotties/success.json"
import { onMounted, onUnmounted, ref } from "vue"

const lottieRef = ref(null)
let lottieInstance = null
const emit = defineEmits(['end'])

onMounted(() => {
    lottieInstance = lottie.loadAnimation({
        container: lottieRef.value,
        renderer: "canvas",
        loop: false,
        autoplay: true,
        animationData: successAnim,
    })
    const loading = document.querySelector('#loading')
    if (loading) {
        setTimeout(() => {
            loading.classList.add('hide')
        }, 500)
    }
    lottieInstance.onComplete = () => emit('end')

})

onUnmounted(() => {
    if (!lottieInstance) return
    lottieInstance.destroy()
    lottieInstance = null
})

</script>
    
<style scoop>
.success-container {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
}

.success-container canvas {
    width: 100vw !important;
    height: 100vh !important;
}
</style>