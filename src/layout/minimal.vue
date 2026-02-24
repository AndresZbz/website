<script setup>
import Footer from '../pages/Footer.vue';
import Header from '../pages/Header.vue';

</script>

<template>
   <div class="grid">
        <Header class="header" />
        <main class="content">
            <slot />
            <Footer />
        </main>

   </div>
    </template>

<style>
.grid {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 2.5rem;
  padding: 2rem;
}

.content {
  max-width: 1100px;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .header,
  .content {
    grid-column: 1 / -1;
  }
}
</style>