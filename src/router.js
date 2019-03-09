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
        // mainheader: Header,
        mainfooter: Footer
      }
    },
    {
      path: "/edit_pwd",
      name: "EditPwd",
      component: () => import("./views/MoreOther/EditPwd.vue")
    },
    {
      path: "/capital_pwd",
      name: "capitalPwd",
      component: () => import("./views/MoreOther/capitalPwd.vue")
    },
    {
      path: "/system_rule",
      name: "systemRule",
      component: () => import("./views/MoreOther/systemRule.vue")
    },
    {
      path: "/system_notice",
      name: "systemNotice",
      component: () => import("./views/MoreOther/systemNotice.vue")
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("./views/MoreOther/setting.vue")
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
