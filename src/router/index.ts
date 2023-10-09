import { createRouter, createWebHistory } from "vue-router"
import MainView from "@/views/MainView.vue"

export const RouteNames = {
  HOME: "home",
  DETAIL: "detail",
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: RouteNames.HOME,
      component: MainView
    },
    {
      path: "/detail/:movieId",
      name: RouteNames.DETAIL,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import("../components/MovieDetail.vue")
      component: () => import("../views/MovieDetailView.vue")
    }
  ]
})

export default router
