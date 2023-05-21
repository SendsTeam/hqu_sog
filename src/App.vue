<template>
  <div>
    <LoadingSuccess v-if='loadingSuccess' @end='loadingSuccess = false' />
    <router-view />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import LoadingSuccess from './components/LoadingSuccess.vue'

const loadingSuccess = ref(false)


onMounted(() => {
  loadingSuccess.value = true
})
</script>


<style>
* {
  margin: 0;
  padding: 0;
}

body {
  width: 100vw;
  height: 100vh;
  min-height: 100%;
  overflow: hidden;
  position: relative;
  user-select: none;
  background-color: #808dc5;
}


#app {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
}
</style>
