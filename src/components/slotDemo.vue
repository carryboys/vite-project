<!--
 * new page
 * @author: zx
 * @since: 2023-08-11
 * demo.vue
-->
<template>
  <div class="container">
    我是
     <slot></slot>
  </div>
</template>

<script setup lang="ts">
// import {ref,reactive} from 'vue';

</script>

<style scoped>
  :slotted(.container .slot_a){
    color: red;
  }
</style>
