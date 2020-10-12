import axios from "../axios";

export const enterToExamination = (data) => {
  return axios
    .post(`/examination/${data.meetingId}`, data)
    .then((response) => response)
    .catch((error) => Promise.reject(error));
};
