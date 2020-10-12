import axios from "@/api/axios";

const endpoint = "question-exam";

export const namespaced = true;

export const state = {
  questions: [],
  question: {},
};

export const mutations = {
  SET_QUESTIONS(state, questions) {
    state.questions = questions;
  },
  SET_QUESTION(state, question) {
    state.question = question;
  },
};

export const actions = {
  getQuestionInExam({ commit }, examId) {
    return axios
      .get(`${endpoint}/${examId}`)
      .then((response) => {
        commit("SET_QUESTIONS", response.data.getQuestions);
      })
      .catch((error) => Promise.reject(error));
  },
};

export const getters = {};
