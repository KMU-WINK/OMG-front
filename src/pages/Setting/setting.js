import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

import { authService } from "../../apis/services/auth";

function Setting(props) {
  const navigate = useNavigate();

  const [mySwitch, setMySwitch] = useState(false);
  const switchClicked = () => {
    setMySwitch(!mySwitch);
  };

  const HandleLogout = async (e) => {
    try {
      await authService.logout();
      alert("로그아웃 되었습니다.");
      navigate("/login");
    } catch (e) {
      console.log(e);
      alert("실패 !");
    }
  };

  return (
    <style.Wrap>
      <Header title={"세팅"} />
      <div>
        <style.SubTitle>개인정보</style.SubTitle>
        <style.Section onClick={() => navigate("/find-email")}>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/Setting/pwIcon.svg"} />
            이메일 찾기
          </div>
          <img src={process.env.PUBLIC_URL + "/images/Common/nextIcon.svg"} />
        </style.Section>
        <style.Section onClick={() => navigate("/change-password")}>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/Setting/pwIcon.svg"} />
            비밀번호 변경하기
          </div>
          <img src={process.env.PUBLIC_URL + "/images/Common/nextIcon.svg"} />
        </style.Section>
      </div>
      <div>
        <style.SubTitle>앱</style.SubTitle>
        <style.Section>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/Setting/lockIcon.svg"}
            />
            알림 설정
          </div>
          <style.MySwitch onClick={switchClicked} mySwitch={mySwitch}>
            <div></div>
          </style.MySwitch>
        </style.Section>
      </div>
      <div>
        <style.SubTitle>정보</style.SubTitle>
        <style.Section>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/Setting/pwIcon.svg"} />
            개인정보 처리방침
          </div>
          <img src={process.env.PUBLIC_URL + "/images/Common/nextIcon.svg"} />
        </style.Section>
        <style.Section>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/Setting/pwIcon.svg"} />
            서비스 이용방침
          </div>
          <img src={process.env.PUBLIC_URL + "/images/Common/nextIcon.svg"} />
        </style.Section>
        <style.Section>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/Setting/pwIcon.svg"} />
            버전 정보
          </div>
          <span>v0.0.1</span>
        </style.Section>
        <style.Section>
          <div onClick={HandleLogout}>
            <img src={process.env.PUBLIC_URL + "/images/Setting/pwIcon.svg"} />
            로그아웃
          </div>
        </style.Section>
      </div>
      <Footer />
    </style.Wrap>
  );
}

export default Setting;
