<script setup>
import Image from "../assets/avatar.webp";
</script>

<template>
  <div class="container">
    <div>
      <img class="avatar" :src="Image" alt="Support real artists." />
    </div>
    <div class="text-container">
      <h1>Juan Bouza</h1>
      <hr />
      <p
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :delay="200"
        :duration="1200"
      >
        <span class="accent">Front-end</span> Web Developer and Game Developer
      </p>
    </div>
  </div>
</template>

<style>
a {
  text-decoration: none;
  color: white;
}

@media (min-width: 320px) and (max-width: 768px) {
  .container {
    justify-content: center;
    align-items: center;
    margin: 10em 5%;
  }

  .container img {
    margin-left: 20%;
  }

  h1 {
    font-size: 40px;
  }

  .avatar {
    border-radius: 50%;
    width: 168px;
  }
}

@media (min-width: 769px) {
  .container {
    justify-content: center;
    align-items: center;
    margin: 15em 20%;
    display: flex;
    gap: 20px;
  }

  h1 {
    font-size: 60px;
  }

  .avatar {
    border-radius: 50%;
    width: 320px;
    margin-right: 3em;
  }
}
</style>
