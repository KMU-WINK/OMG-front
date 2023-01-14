import React, { useState } from "react";
import * as style from "./styles";
import Header from "../../components/Header/header";
import FullButton from "../../components/Button/fullButton";
import Input from "../../components/Input/input";
import { useNavigate } from "react-router";
import { authApiController } from "../../apis/api/auth";

function Join() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [checkPW, setCheckPW] = useState({ password2: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "password2") setCheckPW({ [name]: value });
    else {
      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    }
  };

  // 전체선택, privacy policy, terms of service
  const [all, setAll] = useState(false);
  const [pp, setPP] = useState(false);
  const [ts, setTs] = useState(false);

  const HandleJoin = async () => {
    // 모든 값이 입력되었는지 확인
    if (
      userInfo.name &&
      userInfo.phone &&
      userInfo.email &&
      userInfo.password &&
      checkPW.password2
    ) {
      // 비밀번호 확인이 제대로 되었는지
      if (userInfo.password !== checkPW.password2) {
        alert("비밀번호를 다시 확인해주세요 !");
        return;
      }
      // 모든 약관에 동의 했는지
      if (!pp || !ts) {
        alert("모든 약관에 동의해주셔야 가입이 가능합니다.");
        return;
      }
      // 회원가입 진행
      try {
        await authApiController.register(userInfo);
        alert("회원가입이 완료되었습니다 !");
        navigate("/login");
      } catch (e) {
        console.log("join page error: ", e);
      }
    } else alert("입력되지 않은 곳이 있습니다."); // 빈 입력값이 있을경우
  };

  const checkBoxClicked = (e) => {
    const clicked = e.target.parentNode.id;

    if (clicked === "pp") setPP(!pp);
    else if (clicked === "ts") setTs(!ts);
    else {
      setAll(true);
      setPP(true);
      setTs(true);
    }
  };

  const [modal, setModal] = useState(false);

  const ModalClose = (e) => {
    e.preventDefault();
    setModal(false);
  };

  return (
    <style.Wrap>
      <Header title={"회원가입"} />
      {modal ? (
        <style.Modal>
          <div>
            <h6>개인정보 처리방침</h6>
            <div></div>
            <button onClick={ModalClose}>닫기</button>
          </div>
        </style.Modal>
      ) : null}
      <div>
        <style.InputWrap>
          <div>
            <Input
              title={"이름"}
              onChange={handleOnChange}
              name={"name"}
              value={userInfo.name}
            />
            <Input
              title={"전화번호"}
              onChange={handleOnChange}
              name={"phone"}
              value={userInfo.phone}
            />
            <Input
              title={"이메일"}
              onChange={handleOnChange}
              name={"email"}
              value={userInfo.email}
            />
            <Input
              title={"비밀번호"}
              onChange={handleOnChange}
              name={"password"}
              value={userInfo.password}
            />
            <Input
              title={"비밀번호 확인"}
              onChange={handleOnChange}
              name={"password2"}
              value={checkPW.password2}
            />
            <hr style={{ border: "1px solid #E0E0E0" }} />
          </div>
          <div>
            <div>
              <span id={"all"} onClick={checkBoxClicked}>
                {all ? (
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/Common/checkedIcon.svg"
                    }
                  />
                ) : (
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/Common/uncheckedIcon.svg"
                    }
                  />
                )}
              </span>
              <span>전체 선택</span>
            </div>
            <div>
              <span id={"pp"} onClick={checkBoxClicked}>
                {pp ? (
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/Common/checkedIcon.svg"
                    }
                  />
                ) : (
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/Common/uncheckedIcon.svg"
                    }
                  />
                )}
              </span>
              <span>개인정보 처리방침을 확인했습니다.</span>
            </div>
            <div>
              <span id={"ts"} onClick={checkBoxClicked}>
                {ts ? (
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/Common/checkedIcon.svg"
                    }
                  />
                ) : (
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/Common/uncheckedIcon.svg"
                    }
                  />
                )}
              </span>
              <span>서비스 이용방침을 확인했습니다.</span>
            </div>
          </div>
        </style.InputWrap>
        <FullButton btnName={"회원가입 완료"} onClick={HandleJoin} />
      </div>
    </style.Wrap>
  );
}

export default Join;
