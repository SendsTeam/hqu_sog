<template>
    <div class="wish">
        <div class="title">
            许愿池
        </div>
        <div class="danmuPool">
            <DanmuPool></DanmuPool>
        </div>
    </div>
</template>
    
<script setup>
import DanmuPool from '../components/DanmuPool.vue'

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
    left: .2rem;
    right: .2rem;
    bottom: 6rem;
}
</style>