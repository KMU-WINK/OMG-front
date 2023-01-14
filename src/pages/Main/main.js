import React from "react";
import * as style from "./styles";
import Footer from "../../components/Footer/footer";
import View from "../../components/View/view";
import VerticalButton from "../../components/Button/verticalButton";
import Banner from "../../components/Banner/banner";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { boardService } from "../../apis/services/board";
import { bottleService } from "../../apis/services/bottle";
import { meService } from "../../apis/services/me";
import { useState } from "react";

function Main(props) {
  const navigate = useNavigate();

  // api 연동 예시.. 근데 저도 잘 몰라서.. 이거보다 더 좋은 방법이 있을 수 있습니다..
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      try {
        setData(await meService.getInfo());
      } catch (e) {
        console.log(`main page: ${e}`);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <style.Wrap>
      <style.Top>
        <img
          src={process.env.PUBLIC_URL + "/images/Main/myIcon.svg"}
          onClick={() => navigate("/mypage")}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/Main/notiIcon.svg"}
          onClick={() => navigate("/noti")}
        />
      </style.Top>
      {data?.user?.user?.name === undefined ? (
        <>
          <style.Top2>
            <h1>
              게스트님 안녕하세요
              <br />
              로그인하고 환경보호에 동참해주세요
            </h1>
          </style.Top2>
          <View contents={"로그인 후 모든 기능을 이용할 수 있어요"} />{" "}
        </>
      ) : (
        <>
          <style.Top2>
            <h1>
              {data?.user?.user?.name}님 안녕하세요
              <br />
              {data?.myBottle?.length + data?.completeBottle?.length}병의 공병을
              재활용 했어요
            </h1>
          </style.Top2>
          <View
            contents={[
              <b style={{ color: "#009800" }}>
                {data?.completeBottle?.length}병
              </b>,
              "의 공병을 수거하고 ",
              <b style={{ color: "#009800" }}>{data?.myBottle?.length}병</b>,
              "의 공병을 등록했어요",
            ]}
          />
        </>
      )}
      <style.Wrap2>
        <style.buttons>
          <VerticalButton
            content1={["근처 공병을", <br />, "수거해 주세요"]}
            content2={process.env.PUBLIC_URL + "/images/Main/bycicleIcon.svg"}
            content3={"수거하기"}
            content4={() => navigate("/map")}
          />
          <VerticalButton
            content1={["공병 등록으로", <br />, "환경을 지켜요"]}
            content2={process.env.PUBLIC_URL + "/images/Main/bottlesIcon.svg"}
            content3={"등록하기"}
            content4={() => navigate("/add")}
          />
          <VerticalButton
            content1={["원하는", <br />, "공병이 없나요?"]}
            content2={process.env.PUBLIC_URL + "/images/Main/commentsIcon.svg"}
            content3={"커뮤니티"}
            content4={() => navigate("/board")}
          />
        </style.buttons>
        <style.title>
          <h1>커뮤니티</h1>
          <span onClick={() => navigate("/board")}>더보기▶</span>
        </style.title>
        <style.box>
          <style.community>커뮤니티 글 1 제목입니다.</style.community>
          <style.community>커뮤니티 글 2 제목입니다.</style.community>
          <style.community>커뮤니티 글 3 제목입니다.</style.community>
        </style.box>
        <style.title>
          <h1>환경 캠페인</h1>
        </style.title>
        <style.banners>
          <Banner style1 btnName={["2022 서울", <br />, "환경 캠페인"]} />
          <Banner style2 btnName={["2023 부산", <br />, "환경 캠페인"]} />
          <Banner style3 btnName={["2024 대전", <br />, "환경 캠페인"]} />
        </style.banners>
      </style.Wrap2>
      <Footer />
    </style.Wrap>
  );
}

export default Main;
