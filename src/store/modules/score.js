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
      .then((response) => commit("ADD_SCORE", response.data))
      .catch((error) => error);
  },
  getAllScores({ commit }) {
    return axios
      .get(`/${endpoint}`)
      .then((response) => {
        commit("SET_SCORES", response.data);
        return response.data.newScore;
      })
      .catch((error) => error);
  },
  getScore({ commit, getters }, scoreId) {
    let target = getters.getByScoreId(scoreId);

    if (target) return target;

    return axios
      .get(`/${endpoint}/:${scoreId}`)
      .then((response) => commit("SET_SCORE", response.data))
      .catch((error) => error);
  },
};

export const getters = {
  getByScoreId: (state) => (scoreId) => {
    return state.scores.find((score) => score.scoreId === scoreId);
  },
};
