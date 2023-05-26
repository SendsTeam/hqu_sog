import { createApp } from 'vue'
import App from './App.vue'
import lottie from 'lottie-web'
import graduatePerson from './assets/lotties/graduateperson.json'
import 'animate.css/animate.min.css'
import './assets/css/common.css'
import router from './router'

const app = createApp(App)

const loadingContainer = document.querySelector('#loading')
const loadingLottie = lottie.loadAnimation({
    container: loadingContainer,
    renderer: "canvas",
    loop: true,
    autoplay: true,
    animationData: graduatePerson,
})

app.use(router)
app.mount('#app')
