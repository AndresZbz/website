import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";

import "@fontsource-variable/inter";

createApp(App).use(MotionPlugin).mount("#app");
