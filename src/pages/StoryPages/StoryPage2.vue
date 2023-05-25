<template>
    <div class="page2">
        hello
    </div>
</template>
    
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const nextPage = () => {
    router.push('/story/3')
}



</script>
    
<style scoped>
.page2 {
    width: 100%;
    height: 100%;
}
</style>

<style></style>