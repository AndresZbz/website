<template>
  <Card title="Posts">
    <div v-for="post in posts" :key="post.id">
      <router-link
        @click="update_slug(post.slug)"
        :to="{ name: 'PostDetail', params: { slug: post.slug } }"
      >
        <Card :title="post.title">
          <p>{{ post.date }}</p>
          <p>{{ post.category }}</p>
        </Card>
      </router-link>
    </div>
  </Card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Card from "../components/Card.vue";
const posts = ref([]);
const selected_slug = ref(null);
onMounted(() => {
  fetch_posts();
});

function update_slug(new_slug) {
  selected_slug.value = new_slug;
}

async function fetch_posts() {
  try {
    //the good old try/catch for a json file
    const res = await fetch("/website/data/posts.json");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();

    posts.value = data.posts;

    console.log(posts.value);
  } catch (e) {
    console.error("current error: ", e);
  }
}
</script>
