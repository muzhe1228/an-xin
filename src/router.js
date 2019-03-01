import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
Vue.use(Router);

export default new Router({
  //   mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: Home,
        mainheader: Header,
        mainfooter: Footer
      }
    },
    {
      path: "/optional",
      name: "optional",
      components: {
        default: () => import("./views/Optional"),
        mainheader: Header,
        mainfooter: Footer
      }
    },
    {
      path: "/quick_order",
      name: "QuickOrder",
      components: {
        default: () => import("./views/QuickOrder"),
        mainheader: Header,
        mainfooter: Footer
      }
    },
    {
      path: "/position",
      name: "Position",
      components: {
        default: () => import("./views/Position"),
        mainheader: Header,
        mainfooter: Footer
      }
    },
    {
      path: "/more_other",
      name: "MoreOther",
      components: {
        default: () => import("./views/MoreOther"),
        mainheader: Header,
        mainfooter: Footer
      }
    },
    {
      path: "/login",
      name: "Login",
      components: {
        default: () => import("./views/Login")
      }
    },
    {
      path: "/register",
      name: "Register",
      components: {
        default: () => import("./views/Register")
      }
    }
  ]
});
