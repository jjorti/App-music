import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    // path: "/search",
    path: "/",
    name: "search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/track-detail/:idTrack",
    name: "track-detail",
    component: () => import("../views/TrackDetail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "is-active",
});

export default router;
