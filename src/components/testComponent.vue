<template>
  <div class="grid">
    <div class="msg-content" v-for="msg in msgs" :key="msg">
      <div class="square pfp">
        <img src="../assets/logo.png" />
      </div>
      <div class="container">
        <span class="above">Nico: </span>
        <span class="below">{{ msg }}</span>
      </div>
    </div>
    <div class="message">
      <input placeholder="message Nico" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type test = {
  msg: string;
};

export default defineComponent({
  name: "Test",
  props: {
    msgs: {
      validator: (val: test[]) => {
        return val.every((x) => x.msg != null);
      },
    },
  },
});
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}

.square {
  grid-row: 1;
  grid-column: 1;
  height: 75px;
  width: 75px;
  border: black solid 1px;
}
.container {
  margin: 10px;
  text-align: left;
  grid-row: 1;
  grid-column: 2;
  height: 50px;
  width: 200px;
  border: black solid 1px;
  align-self: center;
  vertical-align: bottom;
  position: relative;
}
.msg-content {
  display: grid;
  grid-column: 3;
  grid-row: 1;
  position: relative;
}
.grid {
  display: grid;
  border: black solid 1px;
  grid-template: 20% 20% 20% 20% 20% / 20% 20% 20% 20% 20%;
}

span {
  position: relative;
  bottom: -10px;
}

.message {
  grid-row: 2;
  grid-column: 1;
}
.below {
  display: grid;
}
input {
  width: 1000px;
}
</style>
