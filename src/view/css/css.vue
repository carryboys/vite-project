<!--
 * new page
 * @author: zx
 * @since: 2023-08-11
 * index.vue
-->
<template>
    <div class="container">
      <slotDemo>
          <div class="slot_a">
            插槽选择器
          </div>
      </slotDemo>
      <div class="div">
        <span>动态css</span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import slotDemo from '../../components/slotDemo.vue'
  const style = ref({
    color:'pink'
  })
  </script>
  
  <style scoped>

  /* 全局选择器 */
  :global(div){
    font-size: 22px;
  }
  /* 动态选择器 */
  .div{
    color:v-bind('style.color')
  }
  </style>
  