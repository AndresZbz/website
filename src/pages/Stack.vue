<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";

const stacks = ref([
  { id: 1, name: "JavaScript" },
  { id: 2, name: "Python" },
  { id: 3, name: "C#" },
  { id: 4, name: "Vue3" },
  { id: 5, name: "Django" },
  { id: 6, name: "Godot" },
  { id: 7, name: "Monogame" },
  { id: 8, name: "PostgreSQL" },
]);
</script>

<template>
  <Card title="My Tech Stack">
    <p>This is the current tech stack I use (for work & hobby)</p>
    <br />
    <div class="stack_box">
      <div v-for="stack in stacks" :key="stack.id" class="stack_card">
        <p>{{ stack.name }}</p>
      </div>
    </div>
  </Card>
</template>

<style>
.stack_box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  margin-top: 16px;
}

.stack_card {
  background: #f4faff;
  border-radius: 22px;
  padding: 14px 20px;
  text-align: center;
  box-shadow:
    0 6px 14px rgba(0, 0, 0, 0.12),
    inset 0 2px 3px rgba(255, 255, 255, 0.9);

  transition: all 0.15s ease;
}

.stack_card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.16),
    inset 0 2px 3px rgba(255, 255, 255, 0.9);
}
</style>
