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
      path: "/home",
      name: "home",
      components: {
        default: Home,
        mainheader: Header,
        mainfooter: Footer
      }
    },
    {
      path: "/home/:type",
      name: "homeType",
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
        //更多
        default: () => import("./views/MoreOther"),
        // mainheader: Header,
        mainfooter: Footer
      }
    },
    {
      path: "/edit_pwd", //修改密码
      name: "EditPwd",
      component: () => import("./views/MoreOther/EditPwd.vue")
    },
    {
      path: "/user_info", //账户信息
      name: "userInfo",
      component: () => import("./views/MoreOther/userInfo.vue")
    },
    {
      path: "/capital", //资金信息
      name: "capital",
      component: () => import("./views/MoreOther/capital.vue")
    },
    {
      path: "/capital_pwd", //资金密码
      name: "capitalPwd",
      component: () => import("./views/MoreOther/capitalPwd.vue")
    },
    {
      path: "/day_table", //每日报表
      name: "dayTable",
      component: () => import("./views/MoreOther/dayTable.vue")
    },
    {
      path: "/week_table", //每周报表
      name: "weekTable",
      component: () => import("./views/MoreOther/weekTable.vue")
    },
    {
      path: "/entry_record", //入金记录
      name: "EntryRecord",
      component: () => import("./views/MoreOther/EntryRecord.vue")
    },
    {
      path: "/gold_record", //出金记录
      name: "GoldRecord",
      component: () => import("./views/MoreOther/GoldRecord.vue")
    },
    {
      path: "/system_rule", //系统规则
      name: "systemRule",
      component: () => import("./views/MoreOther/systemRule.vue")
    },
    {
      path: "/system_notice", //系统公告
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
    },
    { path: "/", redirect: "/home" }
  ]
});
