import axios from "axios";

export const namespaced = true;

export const state = {
  token: "",
  student: {},
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  SET_STUDENT(state, student) {
    state.student = student;
    localStorage.setItem("me", JSON.stringify(student));
  },
  CLEAR_STUDENT() {
    localStorage.removeItem("token");
    localStorage.removeItem("me");
    location.reload();
  },
};

export const actions = {
  login({ commit }, credentials) {
    return axios
      .post("/login", credentials)
      .then((response) => {
        commit("SET_TOKEN", response.data.token);
        commit("SET_STUDENT", response.data.student);
      })
      .catch((error) => error);
  },
  logout({ commit }) {
    commit("CLEAR_STUDENT");
  },
  updateMe({ commit }, credentials) {
    return axios
      .patch("/me", credentials)
      .then((response) => {
        commit("SET_STUDENT", response.data.student);
      })
      .catch((error) => error);
  },
  updatePassword(newPassword) {
    return axios
      .patch("/password", newPassword)
      .then((response) => response)
      .catch((error) => error);
  },
  forgotPassword(email) {
    return axios
      .post("/forgot-password", email)
      .then((response) => response)
      .catch((error) => error);
  },
};

export const getters = {
  getMe(state) {
    return state.student;
  },
};
