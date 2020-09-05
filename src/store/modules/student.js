import axios from "axios";

export const namespaced = true;

export const state = {
  student: {},
};

export const mutations = {
  SET_STUDENT(state, student) {
    state.student = student;
    localStorage.setItem("me", JSON.stringify(student));
    axios.defaults.headers.common["Authorization"] = `Bearer ${student.token}`;
  },
  UPDATE_STUDENT(state, student) {
    state.student = student;
    localStorage.setItem("me", JSON.stringify(student));
  },
  CLEAR_STUDENT() {
    localStorage.removeItem("me");
    location.reload();
  },
};

export const actions = {
  login({ commit }, credentials) {
    return axios
      .post("url/login", credentials)
      .then((data) => commit("SET_STUDENT", data));
  },
  logout({ commit }) {
    commit("CLEAR_STUDENT");
  },
  updateMe({ commit }, credentials) {
    return axios
      .patch("url/updateMe", credentials)
      .then((data) => commit("SET_STUDENT", data));
  },
};

export const getters = {
  loggedIn(state) {
    return !!state.student;
  },
};
