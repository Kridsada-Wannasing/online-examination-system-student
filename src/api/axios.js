import axios from "axios";
import NProgress from "nprogress";

axios.defaults.baseURL = process.env.VUE_APP_API_URL + "/student";

axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    if (
      config.url.includes("/login") ||
      config.url.includes("/forgot-password")
    ) {
      NProgress.start();
      return config;
    }

    const token = localStorage.getItem("token_student");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    NProgress.start();

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use((response) => {
  NProgress.done();
  return response;
});

export default axios;
