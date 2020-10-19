import axios from "@/api/axios";

export const namespaced = true;

export const state = {
  token: "",
  student: {},
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
    localStorage.setItem("token_student", token);
  },
  SET_STUDENT(state, student) {
    state.student = student;
    localStorage.setItem("student", JSON.stringify(student));
  },
  CLEAR_STUDENT() {
    localStorage.removeItem("token_student");
    localStorage.removeItem("student");
    location.reload();
  },
};

export const actions = {
  login({ commit }, credentials) {
    console.log(credentials);
    return axios
      .post("/login", credentials)
      .then((response) => {
        commit("SET_TOKEN", response.data.token);
        commit("SET_STUDENT", response.data.student);
        return response.data;
      })
      .catch((error) => Promise.reject(error));
  },
  logout({ commit }) {
    commit("CLEAR_STUDENT");
  },
};

export const getters = {
  getMe(state) {
    return state.student;
  },
};
