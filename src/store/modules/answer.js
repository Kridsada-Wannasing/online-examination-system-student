import axios from "axios";

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
    state.answers.push(answer);
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
  async fetchAnswers({ commit }, { examId }) {
    const response = await axios.get(
      `http://localhost:8000/student/exam-log/${examId}`
    );
    commit("SET_ANSWERS", response.data);
    return response.data;
  },
  async fetchAnswer({ commit }, { examId, questionId }) {
    const response = await axios.get(
      `http://localhost:8000/student/exam-log/${examId}/${questionId}`
    );
    commit("SET_ANSWERS", response.data);
    return response.data;
  },
  async checkedAnswer({ commit }, { examId, questionId, answer }) {
    const response = await axios.post(
      `http://localhost:8000/student/exam-log/${examId}/${questionId}`,
      answer
    );
    commit("SET_QUESTIONS", response.data);
    return response.data;
  },
  async changeAnswer({ commit, getters }, { examId, questionId, answer }) {
    const response = await axios.patch(
      `http://localhost:8000/student/exam-log/${examId}/${questionId}`,
      answer
    );
    commit("SET_QUESTION", response.data);
    return response.data;
  },
};

export const getters = {};
