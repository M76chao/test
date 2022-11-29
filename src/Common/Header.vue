<template>
  <div>
    <h1 class="bgimg">
      <span>这是一个头部导航</span>
      <br />
      <span>{{ name }}</span>
    </h1>
    <!--    <ceshi />-->
  </div>
</template>
<script>
// import ceshi from "./ceshi.vue";
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  // components: { ceshi },
};
</script>
<style>
.bgimg span {
  color: red;
}
</style>
