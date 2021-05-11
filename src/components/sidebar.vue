<template>
  <div class="servername">Sun baby covenant</div>
  <div class="channels">
    <div>#watashi-wa-kita</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "sidebar",
});
</script>

<style scoped>
.servername {
  display: flex;
  margin: 10px;
  border-bottom: 1px solid black;
}
.channels {
  flex: 1;
}
</style>
