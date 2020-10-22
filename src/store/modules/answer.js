import axios from "@/api/axios";

const endpoint = "exam-log";

export const namespaced = true;

export const state = {
  answers: [],
  answer: {},
};

export const mutations = {
  SET_ANSWERS(state, answers) {
    state.answers = answers;
  },
  SET_ANSWER(state, answer) {
    state.answer = answer;
  },
  CHECKED_ANSWER(state, answer) {
    answer.map((el) => state.answers.push(el));
  },
  CHANGE_ANSWER(state, answer) {
    const index = state.answers.findIndex(
      (element) =>
        element.examId === answer.examId &&
        element.questionId === answer.questionId
    );
    state.answers.splice(index, 1, answer);
  },
};

export const actions = {
  fetchAnswers({ commit }, examId) {
    return axios
      .get(`/${endpoint}/${examId}`)
      .then((response) => commit("SET_ANSWERS", response.data.allExamLog))
      .catch((error) => error);
  },
  fetchAnswer({ commit }, data) {
    return axios
      .get(`/${endpoint}/${data.examId}/${data.questionId}`)
      .then((response) => commit("SET_ANSWER", response.data.examLog))
      .catch((error) => error);
  },
  checkedAnswer({ commit }, data) {
    return axios
      .post(`/${endpoint}/`, data)
      .then((response) => commit("CHECKED_ANSWER", response.data.newExamlog))
      .catch((error) => error);
  },
  changeAnswer({ commit }, data) {
    return axios
      .patch(`/${endpoint}/`, data)
      .then((response) => commit("CHANGE_ANSWER", response.data))
      .catch((error) => error);
  },
};

export const getters = {};
