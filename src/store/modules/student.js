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
  async login({ commit }, credentials) {
    const response = await axios.post(
      "http://localhost:8000/student/login",
      credentials
    );
    commit("SET_TOKEN", response.data.token);
    commit("SET_STUDENT", response.data.student);
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
  getMe(state) {
    return state.student;
  },
};
