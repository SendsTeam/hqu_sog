<template>
    <div class="container">
        <div class="danmaItem" ref="instance" @click="ClickTest">
            <img :src='props.tx' alt="tx" />
            <span>{{ props.text }}</span>
            <div class="info">
                <span class="nickname">by {{ props.nickname }}</span>
                <span class="stunum">{{ props.stunum }}</span>
            </div>
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
    },
    nickname: {
        type: String,
        required: true
    },
    stunum: {
        type: String,
        required: true
    }
})

const instance = ref(null)
const ClickTest = () => {
    // alert('6')
}
onMounted(() => {
    if (props.my) {
        instance.value.classList.add('my')
    }
})




</script>
    
<style scoped>
.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    color: gray;
}

.nickname {
    line-height: 1rem;
    font-size: .5rem;
}

.stunum {
    font-size: .5rem;
    line-height: 1rem;
}

.container {
    line-height: 2rem;
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
    color: #522B29;
}

.my {
    border: 2px solid #A06B9A !important;
}


.danmaItem img {
    display: inline-block;
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
    border-radius: 2rem;
}
</style>