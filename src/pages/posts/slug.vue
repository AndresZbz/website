<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-else-if="error" class="error">{{ error }}</div>
  <div v-else-if="post" class="post-detail">
    <Card>
      <div class="content" v-html="renderedContent"></div>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked"; // This should work now
import DOMPurify from "dompurify";
import Card from "../../components/Card.vue";

const route = useRoute();
const post = ref(null);
const renderedContent = ref("");
const loading = ref(true);
const error = ref("");

// initialize marked with options
marked.setOptions({
  breaks: true,
  gfm: true,
  highlight: function (code, lang) {
    return code;
  },
});

async function fetchPostBySlug(slug) {
  try {
    loading.value = true;
    error.value = "";

    const res = await fetch("/website/data/posts.json");
    if (!res.ok) throw new Error("Failed to fetch posts");

    const data = await res.json();
    const foundPost = data.posts.find((p) => p.slug === slug);

    if (!foundPost) {
      error.value = "Post not found";
      return;
    }

    post.value = foundPost;

    const mdRes = await fetch(`/website/posts/${slug}.md`);
    if (!mdRes.ok) {
      console.error(`MD file not found: /posts/${slug}.md`);
      throw new Error("Failed to fetch markdown content");
    }

    const markdown = await mdRes.text();
    console.log("Markdown loaded:", markdown.substring(0, 100) + "...");

    const html = marked.parse(markdown);
    renderedContent.value = DOMPurify.sanitize(html);
  } catch (err) {
    console.error("Error loading post:", err);
    error.value = "Failed to load post content: " + err.message;
  } finally {
    loading.value = false;
  }
}

// Load post when component mounts
onMounted(() => {
  console.log("Current slug:", route.params.slug);
  if (route.params.slug) {
    fetchPostBySlug(route.params.slug);
  } else {
    error.value = "No slug provided";
    loading.value = false;
  }
});

watch(
  () => route.params.slug,
  (newSlug) => {
    if (newSlug) {
      fetchPostBySlug(newSlug);
    }
  },
);
</script>

<style scoped>
.post-detail {
  margin: 0 auto;
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  color: #666;
  font-size: 0.9rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
  flex-wrap: wrap;
}

.content {
  line-height: 1.8;
}

.content :deep(h1) {
  font-size: 2rem;
  margin: 2rem 0 1rem;
}

.content :deep(h2) {
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
}

.content :deep(p) {
  margin: 1rem 0;
}

.content :deep(code) {
  background: #f5f5f5;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
}

.content :deep(pre) {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 1rem 0;
}

.content :deep(pre code) {
  background: transparent;
  padding: 0;
}

.content :deep(blockquote) {
  border-left: 4px solid #2c5530;
  padding-left: 1rem;
  margin-left: 0;
  color: #555;
}

.loading,
.error {
  text-align: center;
  padding: 3rem;
  color: #666;
}

.error {
  color: #d32f2f;
}
</style>
