import { Cookies } from "react-cookie";

export const ACCESSTOKEN_KEY = "accessToken";
export const REFRESHTOKEN_KEY = "refreshToken";

export const TokenService = {
  getToken,
  setToken,
  removeToken,
};

const cookies = new Cookies();

function getToken() {
  return cookies.get(ACCESSTOKEN_KEY) || null;
}

function setToken(token) {
  if (token) {
    cookies.set(ACCESSTOKEN_KEY, token);
  }
}

function removeToken(ACCESSTOKEN_KEY) {
  cookies.remove(ACCESSTOKEN_KEY, { path: "/" });
}
