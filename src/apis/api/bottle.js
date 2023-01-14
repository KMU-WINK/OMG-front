import axios from "axios";
import { handleSuccess, handleError } from "../utils/axiosHandler";
import { authHeaderJson } from "../utils/authHeader";

const model = "api/bottle";

export const bottleApiController = {
  getBottleList,
  getBottleOne,
  createBottle,
  deleteBottle,
  addLike,
  deleteLike,
  addClick,
};

function getBottleList() {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.get(url, { headers: authHeaderJson() });
}

function getBottleOne(id) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/${id}`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.get(url, { headers: authHeaderJson() });
}

function createBottle(dto) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.post(url, dto, { headers: authHeaderJson() });
}

function deleteBottle(id) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/${id}`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.delete(url, { headers: authHeaderJson() });
}

function addLike(id) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/${id}/like`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.post(url, {}, { headers: authHeaderJson() });
}

function deleteLike(id) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/${id}/like`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.delete(url, { headers: authHeaderJson() });
}

function addClick(id) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/${id}/click`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.post(url, {}, { headers: authHeaderJson() });
}
