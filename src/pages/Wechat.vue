<template>
    <div class="wechat-container">
        <img src="../assets/img/qrcode.png" alt="Wish" id="wechat" />
        请在微信中许愿～
    </div>
</template>
    
<script setup>
</script>
    
<style scoped>
.danmaku-wrapper {
    position: fixed;
    top: 6rem;
    left: 0;
    right: 0;
    bottom: 6rem;
    height: auto;
}

.wechat-container {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: rgb(192, 255, 219);
    flex-direction: column;
    font-size: 2rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, .4);
}

.wechat-container img {
    border-radius: 30px;
    box-shadow: 0 2px 12px 2px #58135852;
    width: 50vw;
    max-width: 50vh;
    height: auto;
}
</style>