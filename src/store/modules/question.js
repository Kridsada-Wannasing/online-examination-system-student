import axios from "@/api/axios";

const endpoint = "question-exam";

export const namespaced = true;

export const state = {
  questions: [],
  question: {},
  countAnswerOfQuestion: [],
};

export const mutations = {
  SET_QUESTIONS(state, questions) {
    state.questions = questions;
  },
  SET_QUESTION(state, question) {
    state.question = question;
  },
  SET_COUNT_OF_QUESTIONS(state, count) {
    state.countAnswerOfQuestion = count;
  },
};

export const actions = {
  getAllQuestionsInThisExam({ commit }, examId) {
    return axios
      .get(`${endpoint}/${examId}`)
      .then((response) => {
        commit("SET_QUESTIONS", response.data.getQuestions);
        commit("SET_COUNT_OF_QUESTIONS", response.data.countAnswer);
      })
      .catch((error) => error);
  },
  // getQuestion({ commit, getters }, { examId, questionId }) {
  //   const target = getters(examId, questionId);

  //   if (target) return target;

  //   const response = await axios.get(
  //     `http://localhost:8000/student/question/${examId}/${questionId}`
  //   );
  //   commit("SET_QUESTION", response.data);
  //   return response.data;
  // },
};

export const getters = {};
