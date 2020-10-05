import axios from "@/api/axios";

const endpoint = "notification";

export const namespaced = true;

export const state = {
  examinationDate: [],
  postponeExaminationDate: [],
  scores: [],
};

export const mutations = {
  SET_EXAMINATION_DATE(state, examinations) {
    state.examinationDate = examinations;
  },
  SET_POSTPONE_EXAMINATION_DATE(state, examinations) {
    state.postponeExaminationDate = examinations;
  },
  SET_SCORE_NOTIFICATION(state, scores) {
    state.scores = scores;
  },
};

export const actions = {
  getExaminationDate({ commit }) {
    return axios
      .get(`/${endpoint}`)
      .then((response) => {
        commit("SET_EXAMINATION_DATE", response.data.examinationDate);
      })
      .catch((error) => error);
  },
  getPostponeExaminationDate({ commit }) {
    return axios
      .get(`/${endpoint}/postpone`)
      .then((response) => {
        commit(
          "SET_POSTPONE_EXAMINATION_DATE",
          response.data.postponeExaminationDate
        );
      })
      .catch((error) => error);
  },
  getScoreNotification({ commit }) {
    return axios
      .get(`/${endpoint}/score`)
      .then((response) => {
        commit("SET_SCORE_NOTIFICATION", response.data.scoreNotification);
      })
      .catch((error) => error);
  },
};

export const getters = {};
