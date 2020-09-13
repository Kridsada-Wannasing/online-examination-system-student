import axios from "../axios";

export const enterToExamination = (data) => {
  return axios
    .post(`/${endpoint}/${data.examinationId}`, data)
    .then((response) => response)
    .catch((error) => error);
};
