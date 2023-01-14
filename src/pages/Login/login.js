import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as style from "./styles";
import Input from "../../components/Input/input";
import FullButton from "../../components/Button/fullButton";
import StrokeButton from "../../components/Button/strokeButton";

import { authService } from "../../apis/services/auth";

function Login() {
  const navigate = useNavigate();
  const [Account, setAccount] = useState(false);
  const RememberACT = (e) => {
    setAccount(!Account);
  };

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // loginForm onChangeHandler
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    if (loginForm.email && loginForm.password) {
      try {
        await authService.login(loginForm);
        navigate("/");
      } catch (e) {
        console.log(`page: ${e.response.status}`);
        throw e;
      }
    }
  };

  return (
    <style.Wrap>
      <style.LogoBlock>
        <img src={""} />
      </style.LogoBlock>
      <style.InputBlock>
        <div>
          <Input
            name={"email"}
            onChange={handleOnChange}
            title={"이메일"}
            value={loginForm.email}
          />
          <Input
            name={"password"}
            onChange={handleOnChange}
            title={"비밀번호"}
            value={loginForm.password}
          />
        </div>
        <style.LoginSetting>
          <span>
            <span>아이디 찾기</span>
            <span> | </span>
            <span>비밀번호 찾기</span>
          </span>
          <input
            type={"checkbox"}
            id={"rememberAccount"}
            onClick={RememberACT}
            style={{ display: "none" }}
          />
          <label for={"rememberAccount"}>
            {Account ? (
              <img
                src={process.env.PUBLIC_URL + "/images/Common/checkedIcon.svg"}
              />
            ) : (
              <img
                src={
                  process.env.PUBLIC_URL + "/images/Common/uncheckedIcon.svg"
                }
              />
            )}

            <span>자동 로그인</span>
          </label>
        </style.LoginSetting>
      </style.InputBlock>
      <style.ButtonBlock>
        <FullButton btnName={"로그인"} onClick={handleLogin} />
        <StrokeButton btnName={"회원가입"} onClick={() => navigate("/join")} />
      </style.ButtonBlock>
    </style.Wrap>
  );
}

export default Login;
