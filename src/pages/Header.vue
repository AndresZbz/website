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
      <p
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :delay="200"
        :duration="1200"
      >
        <span class="accent">Front-end</span> Web Developer and Game Developer
      </p>
      <button
        class="btn-primary"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :delay="200"
        :duration="1200"
        style="margin-bottom: 25px"
      >
        <a href="https://github.com/AndresZbz">Github</a>
      </button>
      <button
        class="btn-secondary"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :delay="200"
        :duration="1200"
      >
        <a
          href="https://www.linkedin.com/in/juan-andres-bouza-boscan-867a5821b/"
          >Linkedin</a
        >
      </button>
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
    margin: 10em 25%;
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
    margin: 10em 20%;
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
