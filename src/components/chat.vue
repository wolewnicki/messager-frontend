<template>
  <div class="header">
    <div>i am head</div>
  </div>
  <div class="chat-container">
    <div class="msg">
      <div>
        <div class="msg-top">
          <div>Nico</div>
        </div>
        <div class="text">{{ msgs }}</div>
      </div>
    </div>
  </div>
  <div class="input-container">
    <input class="input" />
    <button class="send">send</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "chat",
  props: {
    msgs: { required: true, type: String },
  },
  methods: {
    test: (msg: any) => {
      console.log(msg);
    },
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
