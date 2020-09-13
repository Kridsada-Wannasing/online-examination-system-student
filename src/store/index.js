import Vue from "vue";
import Vuex from "vuex";
import * as student from "./modules/student";
import * as examination from "./modules/examination";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { student, examination },
  state: {},
  mutations: {},
  actions: {},
});
