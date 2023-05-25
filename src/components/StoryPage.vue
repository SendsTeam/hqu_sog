<template>
    <transition :name="props.transitionName" mode="out-in">
        <div class="storyPage" v-if="showStatus">
            <slot></slot>
        </div>
    </transition>
</template>
    
<script setup>
import { watchEffect, ref } from 'vue'


const props = defineProps({
    transitionName: {
        type: String,
        default: "default"
    }
    ,
    index: {
        type: Number,
        required: true
    },
    binding: {
        type: Number,
        required: true
    },
})

const showStatus = ref(props.index === 1 ? true : false)
watchEffect(() => {
    if (props.binding === props.index) {
        showStatus.value = true
    } else {
        showStatus.value = false
    }
})
</script>

<style scoped>
.storyPage {
    width: 100%;
    height: 100%;
}

.default-enter-active {
    transition: opacity .5s;
}

.default-enter {
    opacity: 0;
}

.default-leave-active {
    transition: opacity .8s;
}

.default-leave-to {
    opacity: 0;
}
</style>