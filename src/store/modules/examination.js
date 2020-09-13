import axios from "@/api/axios";

const endpoint = "examination";

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
  getAllExaminations({ commit }) {
    return axios
      .get(`/${endpoint}/invited`)
      .then((response) => {
        commit("SET_EXAMINATIONS", response.data.examinationOfToday);
      })
      .catch((error) => error);
  },
};

export const getters = {
  getByExaminationId: (state) => (examinationId) => {
    return state.examinations.find(
      (examination) => examination.examinationId === examinationId
    );
  },
};
