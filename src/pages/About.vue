<script setup>
import Card from "../components/Card.vue";
</script>

<template>
  <Card title="Who am I?">
    <p>
      Hey there. I'm Juan Andrés, a junior Web developer currently finishing up
      my Computer Science career with 2+ years of experience working with
      Frontend Web tecnologies and 1+ year working with Backend technologies. As
      today I work on web development but I also like making games and tools for
      them.
    </p>
    <br />
    <p>
      About myself, I enjoy listening edm music (<a
        href="https://www.youtube.com/watch?v=rFtTml4Uw_s"
        >Like this one from Meganeko!</a
      >) and learning about the design behind games. I also mostly play Pokémon
      games and TCG games aswell.
    </p>
  </Card>
</template>

<style>
a {
  text-decoration: none;
  color: #949494; /* Warm terracotta */
  font-weight: bold;
  transition:
    color 0.3s ease,
    transform 0.2s ease;
  padding: 5px 10px;
  border-radius: 4px;
}

a:hover {
  color: #a0a0a0; /* Deep forest green */
  background: rgba(200, 245, 255, 0.1); /* Light terracotta tint */
  transform: translateY(-2px);
}
</style>
