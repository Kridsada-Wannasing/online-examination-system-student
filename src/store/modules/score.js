import axios from "axios";

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
    state.scores.unshift(score);
  },
};

export const actions = {
  async sendExam({ commit }, exam) {
    const response = await axios.post(
      "http://localhost:8000/student/score/:",
      exam
    );
    await commit("SET_SCORE", response.data);
    return response;
  },
  async getAllScores({ commit }) {
    const response = await axios.get("http://localhost:8000/student/score");
    commit("SET_SCORES", response.data);
    return response.data;
  },
  async getScore({ commit }, scoreId) {
    const response = await axios.get(
      `http://localhost:8000/student/score/:${scoreId}`
    );
    commit("SET_SCORE", response.data);
    return response.data;
  },
};

export const getters = {
  loggedIn(state) {
    return !!state.student;
  },
};
