<template>
    <transition :name="props.transitionName">
        <slot v-if="index"></slot>
    </transition>
</template>
    
<script setup>
const props = defineProps({
    transitionName: String,
    index: {
        type: Number,
        required: true
    }
})
</script>

<style scoped></style>