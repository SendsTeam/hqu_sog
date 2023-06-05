<template>
    <div class="container">
        <div class="danmaItem" @click="" ref="instance">
            <img :src='props.tx' alt="tx" />
            <span>{{ props.text }}</span>
            <!-- <span class="like"></span> -->
        </div>
    </div>
</template>
    
<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    my: {
        type: Boolean,
        default: false
    },
    tx: {
        type: String,
        required: true
    }
})

const instance = ref(null)
onMounted(() => {
    if (props.my) {
        instance.value.classList.add('my')
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
    border: 2px solid rgba(248, 251, 248, 0.856);
    border-radius: 2rem;
    padding: .2rem;
    padding-right: .3rem;

    background: rgba(248, 251, 248, 0.856);
    overflow: hidden;
    /* color: rgb(255, 0, 106); */
    color: black;
}

.my {
    border: 2px solid rgba(232, 46, 68, 0.856) !important;
}


.danmaItem img {
    display: inline-block;
    height: 2rem;
    width: 2rem;
    margin-right: .2rem;
    border-radius: 2rem;
}
</style>