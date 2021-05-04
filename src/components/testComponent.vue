<template>
  <div>
    <div>
      <ul>
        <li>
          <div class="square pfp box">
            <img src="../assets/logo.png" />
          </div>
          <div class="box test">
            <span class="above">Nico: </span>
            <span class="below">{{ msg }}</span>
          </div>
        </li>
      </ul>
    </div>
    <input placeholder="message Nico"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Test",
  props: {
    msg: String,
  },
});
</script>

<style scoped>

img {
  max-width: 100%;
  max-height: 100%;
}

.square {
  height: 75px;
  width: 75px;
}

.box {
  display: flex;
}
.below {
  display: grid;
  position: relative;
  top: 2rem;
  right: 2rem;
}
input {
  width: 1000px;
}
</style>