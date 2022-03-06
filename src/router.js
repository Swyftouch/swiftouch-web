import { createRouter, createWebHistory } from "vue-router";
import HomeSwift from "./views/HomeSwift.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeSwift,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      // route level code-splitting
      // this generates a separate chunk (Dashboard.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/DashboardSwift.vue"),
    },
    {
      path: "/engagements",
      name: "engagements",
      // route level code-splitting
      // this generates a separate chunk (Engagements.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/EngagementsSwift.vue"),
    },
    {
      path: "/displays",
      name: "displays",
      // route level code-splitting
      // this generates a separate chunk (Displays.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/DisplaysSwift.vue"),
    },
    {
      path: "/collection",
      name: "collection",
      // route level code-splitting
      // this generates a separate chunk (Collection.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/CollectionSwift.vue"),
    },
    {
      path: "/revenue",
      name: "revenue",
      // route level code-splitting
      // this generates a separate chunk (Revenue.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/RevenueSwift.vue"),
    },
  ],
});

export default router;
