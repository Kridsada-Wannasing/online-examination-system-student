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
  async login({ commit }, credentials) {
    const data = await axios.post(
      "http://localhost:8000/student/login",
      credentials
    );
    commit("SET_STUDENT", data);
    return data;
  },
  logout({ commit }) {
    commit("CLEAR_STUDENT");
  },
  async updateMe({ commit }, credentials) {
    const data = await axios.patch(
      "http://localhost:8000/student/updateMe",
      credentials
    );
    commit("SET_STUDENT", data);
    return data;
  },
};

export const getters = {
  loggedIn(state) {
    return !!state.student;
  },
};
