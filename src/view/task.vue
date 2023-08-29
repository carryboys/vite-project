<!--
 * new page
 * @author: zx
 * @since: 2023-08-11
 * task.vue
-->
<template>
  <div class="container">宏任务/微任务</div>
</template>

<script setup lang="ts">
// import { ref, reactive } from "vue";
console.log(1);
async function Prom() {
  console.log(2);
  await Promise.resolve();
  console.log(3);
}
setTimeout(() => {
  console.log(4);
  Promise.resolve().then(() => {
    console.log(5);
  });
}, 0);
setTimeout(() => {
  console.log(6);
  Promise.resolve().then(() => {
    console.log(7);
  });
}, 0);

Promise.resolve().then(() => {
  console.log(8);
});
Promise.resolve().then(() => {
  console.log(9);
});
Prom();
console.log(11);


// 1 2 11 8 9 4 5 6 7 
</script>

<style scoped></style>
