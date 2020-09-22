import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import EnterToExamination from "../views/EnterToExamination.vue";
import Examination from "../views/Examination";
import Score from "../views/Score";
import ReportScore from "../views/ReportScoreOfExam";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/enter-to-examination/:examinationId",
    name: "EnterToExamination",
    component: EnterToExamination,
    meta: { requiresAuth: true },
    props: true,
  },
  {
    path: "/examination/:examId",
    name: "Examination",
    component: Examination,
    meta: { requiresAuth: true },
    props: true,
  },
  {
    path: "/score",
    name: "Score",
    component: Score,
    meta: { requiresAuth: true },
    props: true,
  },
  {
    path: "/report-score/:score",
    name: "ReportScore",
    component: ReportScore,
    meta: { requiresAuth: true },
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("token");

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  }
  next();
});

export default router;
