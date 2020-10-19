import axios from "../axios";

export const forgotPassword = (email) => {
  return axios
    .post("/forgot-password", email)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};

export const updatePassword = (password) => {
  return axios
    .patch("/password", password)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};

export const updateMe = (profile) => {
  return axios
    .patch("/me", profile)
    .then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error));
};
