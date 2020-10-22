import axios from "@/api/axios";

const endpoint = "score";

export const namespaced = true;

export const state = {
  scores: [],
  score: {},
};

export const mutations = {
  SET_SCORES(state, scores) {
    state.scores = scores;
  },
  SET_SCORE(state, score) {
    state.score = score;
  },
  ADD_SCORE(state, score) {
    state.scores.unshift(score);
  },
};

export const actions = {
  sendExam({ commit }, exam) {
    return axios
      .post(`/${endpoint}`, exam)
      .then((response) => {
        commit("ADD_SCORE", response.data.newScore);
        commit("SET_SCORE", response.data.newScore);
        return response.data.newScore;
      })
      .catch((error) => Promise.reject(error));
  },
  getScoresForStudent({ commit }) {
    return axios
      .get(`/${endpoint}/student`)
      .then((response) => {
        commit("SET_SCORES", response.data.scores);
      })
      .catch((error) => error);
  },
  getScore({ commit, getters }, examId) {
    let target = getters.getByScoreId(examId);

    if (target) return target;

    return axios
      .get(`/${endpoint}/:${examId}`)
      .then((response) => {
        commit("SET_SCORE", response.data.target);
        return response.data.target;
      })
      .catch((error) => error);
  },
};

export const getters = {
  getByScoreId: (state) => (examId) => {
    return state.scores.find((score) => score.examId === examId);
  },
};
