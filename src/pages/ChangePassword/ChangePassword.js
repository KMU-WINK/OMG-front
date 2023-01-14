import React, { useState } from "react";
import * as style from "./styles";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Input from "../../components/Input/input";
import FullButton from "../../components/Button/fullButton";
import { useNavigate } from "react-router";
import { authApiController } from "../../apis/api/auth";

function ChangePassword() {
  // 비밀번호 변경 전 확인 정보
  const [Form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  // 인증 및 변경할 비밀번호
  const [change, setChange] = useState({
    token: "",
    code: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...Form,
      [name]: value,
    });
  };

  const handleOnChangePW = (e) => {
    const { name, value } = e.target;
    setChange({
      ...change,
      [name]: value,
    });
  };

  const [pageNum, setPageNum] = useState(1);
  const navigate = useNavigate();

  const HanldlePasswordChange = async (e) => {
    const type = e.target.id;
    if (type === "serial") {
      if (Form.name && Form.phone && Form.email) {
        try {
          const token = await authApiController.getToken(Form);
          setChange({ ...change, ["token"]: token.data.token });
          alert("인증번호가 발급되었습니다. 문자를 확인해주세요 !");
        } catch (e) {
          console.log(e);
          return;
        }
      } else {
        alert("입력되지 않은 곳이 있습니다.");
        return;
      }
      setPageNum(pageNum + 1);
    } else if (type === "change") {
      if (change.token && change.code && change.password) {
        try {
          await authApiController.changePassword(change);
          alert("비밀번호 변경이 완료되었습니다.");
          navigate("/");
        } catch (e) {
          console.log(e);
        }
      } else {
        alert("입력되지 않은 곳이 있습니다.");
      }
    }
  };

  return (
    <style.Wrap>
      <Header title={"비밀번호 변경하기"} />
      {pageNum === 1 ? (
        <style.Contents>
          <style.SubTitle>
            본인 인증 후 새로운 비밀번호로 변경이 가능합니다.
          </style.SubTitle>
          <Input
            title={"이름"}
            name={"name"}
            value={Form.name}
            onChange={handleOnChange}
          />
          <Input
            title={"전화번호"}
            name={"phone"}
            value={Form.phone}
            onChange={handleOnChange}
          />
          <Input
            title={"이메일"}
            name={"email"}
            value={Form.email}
            onChange={handleOnChange}
          />
          <FullButton
            btnName={"인증번호 발급받기"}
            onClick={HanldlePasswordChange}
            id={"serial"}
          />
        </style.Contents>
      ) : (
        <style.Contents>
          <style.SubTitle>
            인증 후 새로운 비밀번호로 변경이 가능합니다.
          </style.SubTitle>
          <Input
            title={"인증번호 입력"}
            name={"code"}
            value={change.code}
            onChange={handleOnChangePW}
          />
          <Input
            title={"새로운 비밀번호 입력"}
            name={"password"}
            value={change.password}
            onChange={handleOnChangePW}
          />
          <FullButton
            btnName={"변경하기"}
            onClick={HanldlePasswordChange}
            id={"change"}
          />
        </style.Contents>
      )}
      <Footer />
    </style.Wrap>
  );
}

export default ChangePassword;
