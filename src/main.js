import { createApp } from "vue";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";
import { BootstrapVue3 } from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import "@fontsource-variable/inter";

createApp(App).use(MotionPlugin).use(BootstrapVue3).mount("#app");
