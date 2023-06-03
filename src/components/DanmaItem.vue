<template>
    <div class="danmaItem">
        <img src='http://q1.qlogo.cn/g?b=qq&nk=384637134&s=160' alt="tx" />
        <span>{{ props.text }}</span>
        <span class="like"></span>
    </div>
</template>
    
<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    }
})

</script>
    
<style scoped>
.danmaItem {
    display: inline-block;
    height: 3rem;
    padding-right: 2rem;
    font-size: 1.8rem;
    line-height: 3rem;
    display: flex;
    /* background-color: #fff; */
}

.danmaItem img {
    display: inline-block;
    height: 3rem;
    width: 3rem;
    margin-right: .5rem;
    border-radius: 3rem;
}

.danmaItem .like {
    background-color: #fff;
}
</style>