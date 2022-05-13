import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.saveSrollTop) {
        from.meta.savedPosition =
          document.documentElement.scrollTop || document.body.scrollTop;
      } else {
        to.meta.savedPosition = 0;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      };
    }
  },
  routes: [
    {
      path: "/",
      redirect:"/homepage"
    },
    {
      path: "/homepage",
      name: "homepage",
      component: () => import("./views/homepage.vue"),
      meta: {
        // title: "homepage",
        keepAlive: false,
        savedPosition: true
      },
    },{
      path: "/details",
      name: "details",
      component: () => import("./views/details.vue"),
      // props: true,
      meta: {
        // title: "homepage",
        keepAlive: false,
        savedPosition: true
      },
      
    },{
      path: "/evaluate",
      name: "evaluate",
      component: () => import("./views/evaluate.vue"),
      meta: {
        // title: "homepage",
        keepAlive: false,
        savedPosition: true
      },
    },{
      path: "/release",
      name: "release",
      component: () => import("./views/release.vue"),
      meta: {
        // title: "homepage",
        keepAlive: false,
        savedPosition: true
      },
    }
  ]
});
