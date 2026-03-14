<script setup>
import Image from "../assets/avatar.webp";
import Card from "../components/Card.vue";
</script>

<template>
  <Card>
    <div class="centered-content">
      <img :src="Image" style="border-radius: 50%" width="160px" />
      <h2 style="margin-top: 20px">Juan Bouza</h2>
      <h3>ESP / ENG</h3>
      <p>Web developer | Game Developer</p>
      <nav class="nav">
        <ul>
          <li>
            <router-link to="/"
              ><p
                aria-label="Home"
                class="link mdi mdi-home-variant-outline"
              ></p
            ></router-link>
          </li>
        </ul>
      </nav>
    </div>
  </Card>
</template>

<style scoped>
.centered-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* Your existing styles */
header {
  color: #2c5530;
  margin-top: 50px;
  margin-left: 50px;
  text-align: center;
}

.nav {
  margin-top: 10px;
}

.nav ul {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.nav ul li {
  list-style: none;
  font-style: normal;
  font-family: "Concert One";
}

.link {
  text-decoration: none;
  color: #009dff;
  font-weight: bold;
  transition:
    color 0.3s ease,
    transform 0.2s ease;
  padding: 5px 10px;
  font-size: 32px;
  border-radius: 50%;
}

.link:hover {
  color: #009dff;
  transform: translateY(-2px);
}
</style>
