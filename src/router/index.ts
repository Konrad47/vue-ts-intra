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
      path: "/details/:id",
      name: "details",
      component: () => import("../views/DetailsView.vue"),
      props: true,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../views/EditView.vue"),
      props: true,
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../views/AddView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
