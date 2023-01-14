import { Cookies, useCookies } from "react-cookie";

export const USERID_KEY = "user_id";

export const UserInfoService = {
  getUserID,
  setUserID,
  removeUserID,
};

const cookies = new Cookies();

function getUserID() {
  return cookies.get(USERID_KEY) || null;
}

function setUserID(token) {
  if (token) {
    cookies.set(USERID_KEY, token);
  }
}

function removeUserID() {
  cookies.remove(USERID_KEY, { path: "/" });
}
