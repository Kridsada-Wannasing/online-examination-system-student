import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import EnterToExamination from "../views/EnterToExamination.vue";
import Examination from "../views/Examination";
import Score from "../views/Score";
import ReportScore from "../views/ReportScoreOfExam";
import NProgress from "nprogress";
import Welcome from "../views/Welcome";
import Profile from "../views/Profile";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        path: "welcome",
        name: "Welcome",
        component: Welcome,
        props: true,
        beforeEnter(routeTo, routeFrom, next) {
          store
            .dispatch("meeting/getAllMeetingInStudent")
            .then((meeting) => {
              routeTo.params.meeting = meeting;
              next();
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
      {
        path: "score",
        name: "Score",
        component: Score,
        props: true,
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile,
        props: true,
      },
    ],
  },
  {
    path: "/enter-to-examination/:meetingId",
    name: "EnterToExamination",
    component: EnterToExamination,
    meta: { requiresAuth: true },
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("meeting/getMeeting", routeTo.params.meetingId)
        .then((meeting) => {
          routeTo.params.meeting = meeting;
          next();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  {
    path: "/report-score/:score",
    name: "ReportScore",
    component: ReportScore,
    meta: { requiresAuth: true },
    props: true,
  },
  {
    path: "/examination/:subjectId/:meetingId/:examId",
    name: "Examination",
    component: Examination,
    meta: { requiresAuth: true },
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("question/getQuestionInExam", routeTo.params.examId)
        .then((question) => {
          routeTo.params.question = question;
          next();
        })
        .catch((error) => alert(error));
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("token_student");

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  }

  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
