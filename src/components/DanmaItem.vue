<template>
    <div class="container">
        <div class="danmaItem" @click="">
            <img src='http://q1.qlogo.cn/g?b=qq&nk=384637134&s=160' alt="tx" />
            <span>{{ props.text }}</span>
            <span class="like"></span>
        </div>
    </div>
</template>
    
<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
    text: {
        type: String,
        required: true
    }
})





</script>
    
<style scoped>
.container {
    padding: .2rem;
}


.danmaItem {
    height: 2rem;
    font-size: 1.2rem;
    line-height: 2rem;
    display: flex;
    /* background-color: #fff; */
    border: 1.2px solid #fff;
    border-radius: 2rem;
    padding: .2rem;
    padding-right: .3rem;

    background: rgba(248, 251, 248, 0.856);
    overflow: hidden;
    /* color: rgb(255, 0, 106); */
    color: black;
}



.danmaItem img {
    display: inline-block;
    height: 2rem;
    width: 2rem;
    margin-right: .2rem;
    border-radius: 2rem;
}
</style>