import axios from "axios";
import { handleSuccess, handleError } from "../utils/axiosHandler";
import { authHeaderJson } from "../utils/authHeader";

const model = "api/me";

export const meApiController = {
  getInfo,
  changePointLimit,
  changeProfileImage,
};

function getInfo() {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.get(url, { headers: authHeaderJson() });
}

function changePointLimit(dto) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/point-limit`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.put(url, dto, { headers: authHeaderJson() });
}

function changeProfileImage(dto) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/image`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.put(url, dto, { headers: authHeaderJson() });
}
