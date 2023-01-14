import axios from "axios";
import { handleSuccess, handleError } from "../utils/axiosHandler";
import { authHeaderJson } from "../utils/authHeader";

const model = "api/board";

export const boardApiController = {
  getBoardList,
  getBoardOne,
  createBoard,
  updateBoard,
  deleteBoard,
};

function getBoardList() {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.get(url, { headers: authHeaderJson() });
}

function getBoardOne(id) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/${id}`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.get(url, { headers: authHeaderJson() });
}

function createBoard(dto) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.post(url, dto, { headers: authHeaderJson() });
}

function updateBoard(id, dto) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/${id}`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.put(url, dto, { headers: authHeaderJson() });
}

function deleteBoard(id) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/${id}`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.delete(url, { headers: authHeaderJson() });
}
