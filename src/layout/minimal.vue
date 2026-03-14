<script setup>
import Footer from "../pages/Footer.vue";
import Header from "../pages/Header.vue";
import { ref, watch, onMounted } from "vue";

const isDark = ref(false);

const toggleLanguaage = () => {
  alert("Work in progress!");
};

const toggleTheme = () => {
  isDark.value = !isDark.value;

  updateTheme();
};

const updateTheme = () => {
  if (isDark.value) {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    isDark.value = true;
  } else if (savedTheme === "light") {
    isDark.value = false;
  }
  updateTheme();
});
</script>

<template>
  <div class="settings-bar">
    <!--Settings Icons-->
    <div class="icon-container">
      <p
        @click="toggleLanguaage"
        aria-label="language"
        class="link mdi mdi-translate icon"
        title="language"
      ></p>

      <p
        @click="toggleTheme"
        aria-label="theme"
        class="link mdi mdi-theme-light-dark icon"
        title="Theme"
      ></p>
    </div>
  </div>
  <div class="grid">
    <Header class="header" />
    <main class="content">
      <slot />
      <Footer />
    </main>
  </div>
</template>

<style>
.settings-bar {
  text-align: right;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.02));
  border-radius: 12px;
}

.icon-container {
  display: inline-flex;
  gap: 1rem;
  align-items: center;
}

.icon {
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: transparent;
  position: relative;
}

.icon:hover {
  color: #4a90e2;
  background-color: rgba(74, 144, 226, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

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
