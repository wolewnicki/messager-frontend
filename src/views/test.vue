<template>
  <div>
    <Test :msgs="test" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Test from "../components/testComponent.vue";

export default defineComponent({
  name: "Testview",
  props: {
    test: {
      default: [1, 2],
    },
  },
  components: {
    Test,
  },
});
</script>
