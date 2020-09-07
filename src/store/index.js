import Vue from "vue";
import Vuex from "vuex";
import * as student from "./modules/student";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { student },
  state: {},
  mutations: {},
  actions: {},
});
