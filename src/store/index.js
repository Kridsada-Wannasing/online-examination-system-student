import Vue from "vue";
import Vuex from "vuex";
import * as student from "./modules/student";
import * as meeting from "./modules/meeting";
import * as question from "./modules/question";
import * as answer from "./modules/answer";
import * as score from "./modules/score";
import * as notification from "./modules/notification";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { student, meeting, question, answer, score, notification },
  state: {},
  mutations: {},
  actions: {},
});
