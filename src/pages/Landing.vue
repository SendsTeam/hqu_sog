<template>
    <div></div>
</template>
    
<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'


onMounted(() => {
    const router = useRouter()
    router.push('/wish')
})

</script>