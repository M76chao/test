<template>
  <div>
    <h1 class="bgimg">
      这是一个头部导航 <br />
      {{ name }}
    </h1>
    <ceshi />
  </div>
</template>
<script>
import ceshi from "./ceshi.vue";
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  components: { ceshi },
};
</script>
<style></style>
