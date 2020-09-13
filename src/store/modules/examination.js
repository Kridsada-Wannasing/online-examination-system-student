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
    try {
      const response = await axios.get(
        "http://localhost:8000/student/examination"
      );
      commit("SET_EXAMINATIONS", response.data);
      return;
    } catch (error) {
      return error;
    }
  },

  async enterToExamination(payload) {
    try {
      const response = await axios.post(
        "http://localhost:8000/student/examination",
        payload
      );
      return response.data.allowedExamination;
    } catch (error) {
      return error;
    }
  },
};

export const getters = {};
