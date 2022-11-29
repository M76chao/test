import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/child1",
      name: "child1",
      component: () => import("../micoApp/child1.vue"),
    },
    {
      path: "/child2",
      name: "child2",
      component: () => import("../micoApp/child2.vue"),
    },
  ],
});

export default router;
