<template>
  <div class="justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-center">
      <img :src="Avatar" width="128px" class="rounded-circle" />
    </div>
    <br />
    <div>
      <h1>Juan Bouza</h1>
      <p class="text-secondary">Web Developer and GameDev</p>
    </div>
  </div>
</template>

<script setup>
import Avatar from "../assets/avatar.webp";
</script>
