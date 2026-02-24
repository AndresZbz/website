import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";

import "@fontsource-variable/inter";
import '@mdi/font/css/materialdesignicons.css';
import router  from "./router";

createApp(App).use(MotionPlugin).use(router).mount("#app");
