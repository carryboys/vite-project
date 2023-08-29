<!--
 * new page
 * @author: zx
 * @since: 2023-08-15
 * elTable.vue
-->
<template>
  <div class="container">
    <el-table :data="tableData" style="width: 100%">
        <el-table-column v-for="item in listMap" :prop="item" :label="item" width="180" />
  </el-table>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue';
import {getList,getIpInfo} from '../../request/api';
console.log(Window,window)
getIpInfo().then(res=>{
    console.log(res);
})
let tableData:object[] = reactive([])
const listMap = {
    0:'ip',
    1:'created',
    2:'browser'
}
getList({}).then((res: any)=>{
    res.list.map(item=>tableData.push(item))
})
</script>

<style scoped>

</style>
