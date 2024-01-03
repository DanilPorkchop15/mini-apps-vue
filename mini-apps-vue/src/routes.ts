import {createRouter, createWebHashHistory, Router} from "vue-router";

const router : Router  = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/PageHome.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/PageAbout.vue"),
    },
    {
      path: "/games/hanged-man",
      name: "hanged-man",
      component: () => import("@/views/games/hanged-man/GameHangedMan.vue")
    }
  ],
})

export default router