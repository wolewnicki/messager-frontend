import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Testview from "../views/test.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Test",
    component: Testview
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
