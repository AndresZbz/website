<template>
  <div class="card">
    <h2>{{ props.title }}</h2>
    <slot />
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
});
</script>
<style>
.card {
  border-radius: 28px;

  margin: 30px auto;
  padding: 25px;
}

@media (min-width: 320px) and (max-width: 1024px) {
  .card {
    margin: 30px 10%;
  }
}
</style>
