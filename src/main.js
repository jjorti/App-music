import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import blur from "@/directives/blur";
Vue.use(blur);

import { msToMin } from "@/filters/ms-to-min";
Vue.filter("mstomin", msToMin);

import EventBus from "@/plugins/event-bus";
Vue.use(EventBus);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
