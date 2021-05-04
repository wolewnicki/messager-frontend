<template>
  <div>
    <Test msg="i am msg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Test from "../components/testComponent.vue";

export default defineComponent({
  name: "Testview",
  components: {
    Test,
  },
});
</script>
