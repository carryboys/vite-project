<!--
 * new page
 * @author: zx
 * @since: 2023-08-11
 * index.vue
-->
<template>
      <div v-if="showLoading" class="loading">loading...</div>
  </template>
  
  <script setup lang="ts">
  import {ref} from 'vue'
  const showLoading =ref<boolean>(false)
  const show=()=>showLoading.value = true;
  const hide=()=>showLoading.value =false
  defineExpose({
    show,
    hide,
    showLoading
  })
  </script>
  
  <style scoped>
    .loading{
      background:black;
      opacity: 0.8;
      font-size: 30px;
      display: flex;
      width: 100vw;
      justify-content: center;
      align-items: center;
      height: 100vh;
      color: white;
    }
  </style>
  