import axios from "../axios";

export const enterToExamination = (data) => {
  return axios
    .post(`/examination/${data.examinationId}`, data)
    .then((response) => response)
    .catch((error) => error);
};
