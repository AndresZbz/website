import { createWebHistory, createRouter } from "vue-router";
import Slug from "./pages/posts/slug.vue";
import NotFound from "./pages/not-found.vue";

const routes = [
  { path: "/", name: "Home", component: () => import("./pages/Home.vue") },
  { path: "/post/:slug", name: "PostDetail", component: Slug },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

console.log("Router file loaded"); // Check if this logs

const router = createRouter({
  history: createWebHistory("/website/"),
  routes,
});

export default router;
