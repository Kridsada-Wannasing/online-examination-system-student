import { apiClient } from "../axios";

export default {
  login(credentials) {
    return apiClient.post("/login", credentials);
  },
  updateMe(credentials) {
    return apiClient.patch("/updateMe", credentials);
  },
  updatePassword(newPassword) {
    return apiClient.patch("/updatePassword", newPassword);
  },
  forgotPassword() {
    return apiClient.post("/forgotPassword");
  },
};
