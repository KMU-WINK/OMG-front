import { TokenService } from "./token";

export function authHeader() {
  // get jwt token
  const user = TokenService.getToken();

  if (user) {
    let token = user;
    return {
      Authorization: `${token}`,
    };
  } else {
    return {};
  }
}

export function authHeaderJson() {
  // get jwt token
  const user = TokenService.getToken();

  if (user) {
    let token = user;
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `${token}`,
    };
  } else {
    return {};
  }
}

export function authHeaderFormData() {
  // get jwt token
  const user = TokenService.getToken();

  if (user) {
    let token = user;
    return {
      "Content-Type": "multipart/form-data",
      Authorization: `${token}`,
    };
  } else {
    return {};
  }
}

export function headerJson() {
  return {
    "Content-Type": "application/json",
  };
}
