<template>
    <div class="wish">
        <div class="title">
            毕业季许愿池
        </div>
        <div class="nav">
            <button class="nav_button__shadow story" type="button">
                我的故事
            </button>
            <button class="nav_button__shadow my-danma" type="button">
                我的弹幕
            </button>
        </div>
        <div class="danmuPool">
            <DanmaPool />
        </div>
        <Card />
    </div>
</template>
    
<script setup>
import DanmaPool from '../components/DanmaPool.vue'
import Card from '../components/Card.vue'
</script>
    
<style scoped>
.wish {
    padding: 4rem 1rem;
    color: #fff;
    font-size: 1.8rem;
    position: absolute;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;

    animation: 1s slideInUp ease;
}

.title {
    position: absolute;
    top: 3rem;
    left: 1rem;
    right: 1rem;
    text-align: center;

    font-size: 1.8rem;
    color: rgb(99, 239, 239);
    text-shadow: 1px 1px 5px #b235e4;

}


.danmuPool {
    position: absolute;
    top: 6rem;
    left: .5rem;
    right: .5rem;
    bottom: 6rem;
}

.nav_button__shadow {
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
    color: #fff;
    font-size: 1.2rem;
    font-family: fang;

    background-color: rgba(255, 255, 255, 0.11);
}

.nav_button__shadow:active {
    background: rgba(255, 255, 255, 0.411);
}

.story {
    position: absolute;
    top: 3rem;
    left: .5rem;
    z-index: 99;
}

.my-danma {
    position: absolute;
    top: 3rem;
    right: .5rem;
    z-index: 99;
}
</style>