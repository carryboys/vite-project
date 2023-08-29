<!--
 * new page
 * @author: zx
 * @since: 2023-08-11
 * index.vue
-->
<template>
  <div class="container">
    <!-- <el-button type="primary">Primary</el-button> -->
    <!-- <div v-if="showLoading" class="loading">loading...</div> -->
    <!-- <slotDemo>
        <div class="slot_a">
          插槽选择器
        </div>
    </slotDemo> -->
    <div v-for="item in page">
      <!-- 动态css -->
      <router-link class="trendsCss" :to="{ path: item.path }">{{
        item.name
      }}</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// import {  getCurrentInstance  } from "vue";
// import slotDemo from '../components/slotDemo.vue';
import { reactive, ref } from "vue";

// const routeMap=reactive({
//   0:'css',
//   1:'task',
//   2:'chat',
//   3:'createVnode',
//   4:'route'
// })
const page = reactive([
  {
    name: "css",
    path: "/css",
  },
  {
    name:'task',
    path:'/task'
  },
  {
    name:"chat",
    path:'/chat'
  },
  {
    name:'h函数',
    path:'/createVnode'
  },
  {
    name:'route',
    path:'/route'
  },
]);
const style = ref({
  color: "pink",
  fontSize: "30px",
});
// import {ref} from 'vue'
// import {userStore} from './../store'
// const user = userStore()
// const showLoading =ref<boolean>(false)
// const app = getCurrentInstance();
// app?.proxy?.$_loading.show()
// const data:object[]=[{
//   name:'zs',
//   age:12,

// },{
//   name:'ls',
//   age:10,
// }]
// const filterFinishData =app?.proxy?.$filter.filterByName(data,'zs')
// console.log(filterFinishData);
</script>

<style scoped>
.loading {
  background: black;
  opacity: 0.8;
  font-size: 30px;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
}
/* 全局选择器 */
:global(div) {
  font-size: 22px;
}
.trendsCss {
  color: v-bind("style.color");
  font-size: v-bind("style.fontSize");
}
</style>
