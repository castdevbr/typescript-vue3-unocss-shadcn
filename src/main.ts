import { createApp } from "vue";
import "./assets/css/index.css";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
