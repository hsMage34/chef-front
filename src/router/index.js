import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/inscription",
    name: "inscription",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InscriptionView.vue"),
  },
  {
    path: "/restorant",
    name: "restorant",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RestorantView.vue"),
  },

  {
    path: "/listsrestaurants",
    name: "listsrestaurants",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListsRestaurants.vue"),
  },


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
