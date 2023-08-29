<template>
  <div class="container flex">
    <div class="chatStyle chat" ref="chat">
      <div v-for="item in chatList" class="chatbox" m="100">
        <div class="i-ic-baseline-accessibility  "></div>
        {{ item.name }}:{{ item.msg }}
      </div>
    </div>
    <input m="1" v-model="newChatMsg" />
    <el-button type="primary" m="2" @click="send">发送</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, nextTick } from "vue";
import {getList} from '../request/api'
// console.log(getUniteLoginUrl());

const newChatMsg = ref("");
interface chatInter {
  name: string;
  msg: string;
}
const chatList: chatInter[] = reactive([]);
// 获取dom元素
let chat = ref<HTMLDivElement>();

getList({}).then((res) => {
    console.log("login", res);
  });
const send = async () => {
  chatList.push({
    name: "ls",
    msg: newChatMsg.value,
  });
  //'!'非空断言
  // 第一种方式
  // nextTick(()=>{
  //   chat.value!.scrollTop=99999
  // })
  await nextTick();
  chat.value!.scrollTop = 99999;
};
const style = ref({
  border: "1px solid red",
  padding: "20px",
  minWidth: "400px",
});
</script>

<style scoped lang="scss">
.chatStyle {
  text-align: left;
  border: v-bind("style.border");
  padding: v-bind("style.padding");
  min-width: v-bind("style.minWidth");
  min-height: v-bind("style.minWidth");
  max-height: 200px;
  overflow-y: scroll;
  .chatbox {
    background: #333;
    margin: 10px 0;
    padding: 5px;
  }
}
</style>
