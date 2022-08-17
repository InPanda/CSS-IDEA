import Vue from "vue";

import "./assets/css/reset.css";
import App from "./app";

Vue.config.productionTip = false;
new Vue({ render: h => h(App) }).$mount("#app");
