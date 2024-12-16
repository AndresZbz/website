<script setup>
import About from "./pages/About.vue";
import Header from "./pages/Header.vue";
import Projects from "./pages/Projects.vue";
import Skills from "./pages/Skills.vue";
</script>

<template>
  <header
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :delay="200"
    :duration="1200"
  >
    <Header />
  </header>
  <main class="main-container">
    <About />
    <Skills />
    <Projects />
  </main>
</template>

<style>
.main-container {
}
</style>
