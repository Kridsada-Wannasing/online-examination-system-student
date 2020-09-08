import axios from "axios";

export const namespaced = true;

export const state = {
  examinations: [],
  examination: {},
};

export const mutations = {
  SET_EXAMINATIONS(state, examinations) {
    state.examinations = examinations;
  },
};

export const actions = {
  async getAllExaminations({ commit }) {
    const response = await axios.get(
      "http://localhost:8000/student/examination"
    );
    commit("SET_EXAMINATIONS", response.data);
    return response;
  },

  async enterToExamination(payload) {
    const response = await axios.post(
      "http://localhost:8000/student/examination",
      payload
    );
    return response.data.allowedExamination;
  },
};

export const getters = {};
