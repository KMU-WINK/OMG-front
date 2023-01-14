import React from "react";
import {
  Contents,
  Glass,
  InfoWrap,
  Row,
  Title,
  TopWrap,
  Wrapper,
} from "./styles";
import { useNavigate } from "react-router";
import FullButton from "../../components/Button/fullButton";

function Add2() {
  const navigate = useNavigate();

  const HandleGlassCount = () => {};

  return (
    <Wrapper>
      <TopWrap>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/Main/myIcon.svg"}
            onClick={() => navigate("/mypage")}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/Main/notiIcon.svg"}
            onClick={() => navigate("/noti")}
          />
        </div>
        <div>
          이유빈님 안녕하세요
          <br /> 공병 등록을 시작해 볼까요?
        </div>
        <button>여기를 눌러 수거받을 주소를 입력해주세요</button>
      </TopWrap>
      <InfoWrap>
        <Contents>
          <Title>어떤 종류의 공병을 가지고 있나요 ?</Title>
          <Row>
            <Glass back={"#009800"} onClick={HandleGlassCount}>
              <span>소주병</span>
              <span>5병</span>
            </Glass>
            <Glass back={"#A95C01"} onClick={HandleGlassCount}>
              <span>소주병</span>
              <span>5병</span>
            </Glass>
            <Glass back={"#D2D2D2"} onClick={HandleGlassCount}>
              <span>소주병</span>
              <span>5병</span>
            </Glass>
          </Row>
        </Contents>
        <Contents>
          <Title>공병의 상태를 확인해주세요</Title>
          <div>
            <div>모든 공병 내부에 이물질이 없습니다</div>
            <div>모든 공병에 깨진 부분이 없습니다</div>
          </div>
        </Contents>
        <Contents>
          <Title>공병사진을 올려주세요</Title>
          <div>여기를 눌러 사진을 추가해주세요</div>
        </Contents>
        <Contents>
          <Title>공동현관 비밀번호를 입력해주세요</Title>
          <div>
            <div>모든 공병 내부에 이물질이 없습니다</div>
            <div>모든 공병에 깨진 부분이 없습니다</div>
          </div>
        </Contents>
        <div>
          수거를 원하는 공병은 집 문앞에 놓아주세요. 출입이 제한되는 회사, 학교,
          기숙사 등의 장소나 비밀번호 오류등의 사유로 출입이 어려운 경우
          부득이하게 수거가 불가능할 수 있습니다.
        </div>
        <FullButton btnName={"공병 등록하기"} />
      </InfoWrap>
    </Wrapper>
  );
}

export default Add2;
