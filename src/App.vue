<template>
  <div class="g-signin2" data-onsuccess="testFunction"></div>
  <div class="main-container">
    <div class="sidebar">
      <Sidebar />
    </div>

    <div class="chat">
      <chat :msgs="Text" @sent-msg="addMsg"></chat>
    </div>
  </div>
</template>

<style>
html,
body {
  height: 95%;
}
#app {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-container {
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 100%;
  border: 2px solid black;
}
.sidebar {
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px solid black;
}
.chat {
  display: flex;
  flex: 1;
  flex-flow: column wrap;
  width: 100%;
  border-left: 1px solid black;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Chat from "./components/chat.vue";
import Sidebar from "./components/sidebar.vue";
import { postTest } from "./ApiCalls/getData";

const p = postTest;

function testFunction (google: any) {
  console.log(google.getAuthResponse().id_token)
}

(window as any).testFunction = testFunction

export default defineComponent({
  name: "myapp",
  components: {
    Chat,
    Sidebar,
  },
  data() {
    return {
      Text: [
        { name: "will", body: "test will" },
        { name: "nico", body: "test nico" },
      ],
    };
  },
  methods: {
    addMsg(msg: string) {
      this.Text.push({ name: "console", body: msg });
      p(msg);
    },
    myFunc(google: any) {
      console.log(google.getBasicProfile());
    }
  },
});
</script>
