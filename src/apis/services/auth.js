import { authApiController } from "../api/auth";
import { TokenService } from "../utils/token";

export const authService = {
  login,
  logout,
};

async function login(dto) {
  try {
    const response = await authApiController.login(JSON.stringify(dto));
    const token = JSON.stringify(response.data["token"]);
    TokenService.setToken(token);
  } catch (e) {
    switch (e.response.status) {
      case 400:
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
        break;
    }
    throw e;
  }
}

async function register(dto) {}

async function logout() {
  try {
    TokenService.removeToken();
  } catch (e) {
    console.log(e);
  }
}
