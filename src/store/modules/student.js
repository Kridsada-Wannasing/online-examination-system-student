import studentService from "../../api/services/student";
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
    const res = await studentService.login(credentials);
    commit("SET_STUDENT", res.data);
  },
  logout({ commit }) {
    commit("CLEAR_STUDENT");
  },
  async updateMe({ commit }, credentials) {
    const updatedMe = await studentService.updateMe(credentials);
    commit("SET_STUDENT", updatedMe);
  },
  async updatePassword(newPassword) {
    const updatedPassword = await studentService.updatePassword(newPassword);
    return updatedPassword.data.status;
  },
  async forgotPassword(email) {
    const message = await studentService.forgotPassword(email);
    return message.data.status;
  },
};

export const getters = {
  loggedIn(state) {
    return !!state.student;
  },
};
