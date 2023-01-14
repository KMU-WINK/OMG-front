import axios from "axios";
import { handleSuccess, handleError } from "../utils/axiosHandler";
import { headerJson, authHeaderJson } from "../utils/authHeader";

const model = "api/auth";

export const authApiController = {
  login,
  register,
  logout,
  ForgotEmail,
};

function login(dto) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/login`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.post(url, dto, { headers: headerJson() });
}

function register(dto) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/register`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.post(url, dto, { headers: headerJson() });
}

function logout() {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/logout`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.get(url, { headers: authHeaderJson() });
}

function ForgotEmail(dto) {
  const url = `${process.env.REACT_APP_BASE_URL}/${model}/forgot/email`;
  axios.interceptors.response.use(handleSuccess, handleError);
  return axios.post(url, dto, { headers: headerJson() });
}

