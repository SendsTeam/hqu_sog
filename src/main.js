import { createApp } from 'vue'
import App from './App.vue'
import lottie from 'lottie-web'
import GraduateAni from './assets/lotties/graduateperson.json'
import 'animate.css/animate.min.css'
import './assets/css/common.css'
import router from './router'

const app = createApp(App)


// loadingAni
const loadingContainer = document.querySelector('#loading')
lottie.loadAnimation({
    container: loadingContainer,
    renderer: "canvas",
    loop: true,
    autoplay: true,
    animationData: GraduateAni,
})


app.use(router)
app.mount('#app')
