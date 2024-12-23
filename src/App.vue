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
@font-face {
  font-family: "saiba outline";
  src: url("assets/fonts/saiba-45.outline.ttf");
}

@font-face {
  font-family: "saiba regular";
  src: url("assets/fonts/saiba-45.regular.ttf");
}

@font-face {
  font-family: "terminal grotesque";
  src: url("assets/fonts/terminal-grotesque.grotesque-regular.ttf");
}

h1 {
  font-family: "saiba outline";
  line-height: 1em;
  animation: glitch1 2.5s infinite;
}

h1:nth-child(2) {
  color: #67f3da;
  animation: glitch2 2.5s infinite;
}

h1:nth-child(3) {
  color: #f16f6f;
  animation: glitch3 2.5s infinite;
}
/*Keyframes*/

/*Animation by F. Rilling / RillingDev */
@keyframes glitch1 {
  0% {
    transform: none;
    opacity: 1;
  }
  7% {
    transform: skew(-0.5deg, -0.9deg);
    opacity: 0.75;
  }
  10% {
    transform: none;
    opacity: 1;
  }
  27% {
    transform: none;
    opacity: 1;
  }
  30% {
    transform: skew(0.8deg, -0.1deg);
    opacity: 0.75;
  }
  35% {
    transform: none;
    opacity: 1;
  }
  52% {
    transform: none;
    opacity: 1;
  }
  55% {
    transform: skew(-1deg, 0.2deg);
    opacity: 0.75;
  }
  50% {
    transform: none;
    opacity: 1;
  }
  72% {
    transform: none;
    opacity: 1;
  }
  75% {
    transform: skew(0.4deg, 1deg);
    opacity: 0.75;
  }
  80% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

@keyframes glitch2 {
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(-2px, -3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(-5px, -2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(-5px, -1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(-2px, -6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }
}

@keyframes glitch3 {
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(2px, 3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(5px, 2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(5px, 1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(2px, 6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }
}

h2 {
  font-family: "saiba regular";
}

p {
  font-family: "terminal grotesque";
  font-size: 20px;
}
</style>
