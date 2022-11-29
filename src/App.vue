<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/child1">child1</RouterLink>
        <RouterLink to="/child2">child2</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  margin-bottom: 100px;
}
nav a {
  margin: 0 100px;
  color: blue;
}
.router-link-active {
  color: #282828;
}
</style>
