<template>
  <div class="header">
    <div>i am head</div>
    <button @click="test()">getData</button>
  </div>
  <div class="chat-container">
    <div class="msg" v-for="(msg, index) in msgs" :key="`msg-${index}`">
      <div>
        <div class="msg-top">
          <div>{{ msg.name }}</div>
        </div>
        <div class="text">{{ msg.body }}</div>
      </div>
    </div>
  </div>
  <div class="input-container">
    <input class="input" v-model="msg" />
    <button class="send" @click="submit()">send</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { request, postTest, test } from "../ApiCalls/getData";

export default defineComponent({
  name: "chat",
  emits: ["sent-msg"],
  props: {
    msgs: { required: true, type: Array },
  },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    submit() {
      this.$emit("sent-msg", this.msg);
      this.msg = "";
    },
    request,
    postTest,
    test
  },
});
</script>

<style scoped>
.header {
  display: flex;
  margin: 10px;
  border-bottom: 1px solid black;
}
.chat-container {
  flex: 1;
  overflow: auto;
  flex-grow: 1;
}
.msg {
  display: flex;
  align-items: flex-end;
  border: 1px solid blue;
  margin: 10px;
  width: calc(100% - 50px);
  word-wrap: break-word;
}
.msg-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.text {
  padding: 10px;
  width: 100%;
}
.input-container {
  display: flex;
}
.input {
  flex: 1;
}
</style>
