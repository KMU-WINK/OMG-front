import React, { Fragment, useState, useEffect } from "react";
import * as style from "./styles";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import { useNavigate } from "react-router";
import { DATA } from "../Map/data";
import Banner from "../../components/Banner/banner";
import GreenFullButton from "../../components/Button/greenFullButton";
import BottleBanner from "../../components/Banner/bottleBanner";
import WhiteFullButton from "../../components/Button/whiteFullButton";
import WhiteView from "../../components/View/whiteView";
import Modal2 from "../../components/Modal/modal2";
import Modal4 from "../../components/Modal/modal4";

import { bottleService } from "../../apis/services/bottle";

const { kakao } = window;

function BottleDetail(props) {
  const navigator = useNavigate();

  const [id, setId] = useState(1); //id 설정
  const [data, setData] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    (async () => {
      try {
        setData(await bottleService.getBottleOne(id));
      } catch (e) {
        console.log(`main page: ${e}`);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [indexNum, setIndexNum] = useState(1); //데이터 인덱스
  const [pageNum, setPageNum] = useState(1); //페이지 번호
  const [like, setLike] = useState(DATA[indexNum].isLiked);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [choiceDateTime, setChoiceDateTime] = useState([
    "여기를 눌러 ",
    <b style={{ color: "#009800" }}>수거예정시간</b>,
    "을 선택할 수 있어요",
  ]);

  const handleLikeClick = (e) => {
    setLike((like) => !like);
    //like 상태 DATA에 저장하는 코드 필요함
  };

  const pageClick = () => {
    setPageNum(pageNum + 1);
  };

  const [modalOpen, setOpenModal] = useState(false); //주의사항 모달 및 관련 로직
  const [check1, setCheck1] = useState("❎");
  const [check2, setCheck2] = useState("❎");
  const [check3, setCheck3] = useState("❎");
  const [check4, setCheck4] = useState("❎");

  const checked1 = () => {
    if (check1 === "❎") setCheck1("✅");
    else setCheck1("❎");
  };
  const checked2 = () => {
    if (check2 === "❎") setCheck2("✅");
    else setCheck2("❎");
  };
  const checked3 = () => {
    if (check3 === "❎") setCheck3("✅");
    else setCheck3("❎");
  };
  const checked4 = () => {
    if (check4 === "❎") setCheck4("✅");
    else setCheck4("❎");
  };
  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);
  const okModal = () => {
    if (
      check1 === "✅" &&
      check2 === "✅" &&
      check3 === "✅" &&
      check4 === "✅"
    ) {
      setPageNum(pageNum + 1);
      closeModal();
    } else {
      openErrorModal();
    }
  };

  const [errorModalOpen, setOpenErrorModal] = useState(false);
  const openErrorModal = () => setOpenErrorModal(true);
  const closeErrorModal = () => setOpenErrorModal(false);

  useEffect(() => {
    try {
      let container = document.getElementById("map");
      let options = {
        center: new kakao.maps.LatLng(data.lat, data.lng),
        level: 2,
      };
      let map = new kakao.maps.Map(container, options);

      // 마커 이미지의 이미지 주소
      let imageSrc = process.env.PUBLIC_URL + "/images/Common/markerIcon.svg";
      const imageSize = new kakao.maps.Size(24, 35);
      // 마커 이미지 생성
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data.lat, data.lng),
        image: markerImage,
      });
    } catch (err) {
      console.log(err);
    }
    return () => {};
  }, [data]);

  return (
    <style.Wrap>
      <Header
        title={
          pageNum === 1 ? "지도" : pageNum === 4 ? "수거예약 확정" : "수거하기"
        }
      />
      <style.map>
        <div
          id="map"
          style={{
            maxWidth: "480px",
            width: "100vw",
            height: "200px",
          }}
        ></div>
      </style.map>

      <style.Wrap2>
        <style.address>{data?.address}</style.address>
        {pageNum === 1 ? ( //1페이지
          <>
            <style.infoContainer>
              <div>
                <style.profileImg
                  src={process.env.PUBLIC_URL + "/images/Common/Profile.svg"}
                />
                <style.userInfoBox>
                  <span style={{ fontWeight: "600" }}>
                    {" "}
                    {data?.user?.name}{" "}
                  </span>
                  <span>
                    수거{" "}
                    <b style={{ color: "#009800" }}>
                      {" "}
                      {data?.user?.bottleBuy}회{" "}
                    </b>{" "}
                    | 등록{" "}
                    <b style={{ color: "#009800" }}>
                      {" "}
                      {data?.user?.bottleSell}회{" "}
                    </b>{" "}
                    | 공병지수{" "}
                    <b style={{ color: "#009800" }}> {data?.user?.point}ml </b>
                  </span>
                </style.userInfoBox>
              </div>
              <img
                alt={"likeIcon"}
                onClick={handleLikeClick}
                src={
                  like
                    ? process.env.PUBLIC_URL +
                      "/images/Common/likeFilledIcon.svg"
                    : process.env.PUBLIC_URL + "/images/Common/likeIcon.svg"
                }
              />
            </style.infoContainer>
            <style.image src={process.env.PUBLIC_URL + data?.img} />
            <style.banners>
              {data?.sojuNum !== 0 ? (
                <Banner
                  styleSoju
                  btnName={["소주병", <br />, data?.sojuNum, "병"]}
                />
              ) : null}
              {data?.beerNum !== 0 ? (
                <Banner
                  styleBeer
                  btnName={["맥주병", <br />, data?.beerNum, "병"]}
                />
              ) : null}
              {data?.extraNum !== 0 ? (
                <Banner
                  styleEtc
                  btnName={["기타", <br />, data?.extraNum, "병"]}
                />
              ) : null}
              <Banner
                style2
                btnName={["예상 보증금", <br />, data?.money, "원"]}
              />
              <Banner style3 btnName={["내부 이물질", <br />, "없어요"]} />
              <Banner style3 btnName={["깨진 부분", <br />, "없어요"]} />
            </style.banners>
            <style.etcFont>
              조회 {data?.clicks} | 관심 {data?.likes?.length}
            </style.etcFont>
            <GreenFullButton
              onClick={pageClick}
              btnName={"공병 수거하러 가기"}
            />
          </>
        ) : pageNum === 2 ? (
          <>
            <style.title>이유빈님이 수거할 공병이에요</style.title>
            <style.bottleBanners>
              <BottleBanner
                style1
                style={{ margin: "0px", cursor: "default" }}
                btnName={["소주병", <br />, data?.sojuNum, "병"]}
              />
              <BottleBanner
                style2
                style={{ margin: "0px", cursor: "default" }}
                btnName={["맥주병", <br />, data?.beerNum, "병"]}
              />
              <BottleBanner
                style3
                style={{ margin: "0px", cursor: "default" }}
                btnName={["기타", <br />, data?.extraNum, "병"]}
              />
            </style.bottleBanners>
            <WhiteView
              btnName={[
                <b style={{ color: "#009800" }}>총 보증금 {data?.money}원</b>,
                " 예상",
              ]}
            />
            <style.title>수거예정시간을 선택해주세요</style.title>
            <WhiteFullButton
              style={{ justifyContent: "center" }}
              btnName={choiceDateTime}
            />
            <style.texts>
              수거예정시간은 다음날 자정까지만 선택할 수 있어요
            </style.texts>
            <GreenFullButton onClick={pageClick} btnName={"다음"} />
          </>
        ) : pageNum === 3 ? (
          <>
            <style.title>수거하기 전 마지막으로 확인해주세요</style.title>
            <WhiteView
              btnName={[
                "소주병 ",
                <b style={{ color: "#009800" }}>{data?.sojuNum}병</b>,
                " | 맥주병 ",
                <b style={{ color: "#009800" }}>{data?.beerNum}병</b>,
                " | 기타 ",
                <b style={{ color: "#009800" }}>{data?.extraNum}병</b>,
              ]}
            />
            <WhiteView
              btnName={[
                "2022년 11월 01일 ",
                <b style={{ color: "#009800" }}>오후 09:00까지</b>,
                " 수거예정",
              ]}
            />
            <style.boldTexts>
              <div>해당 주소지의 공동현관 비밀번호는</div>
              <div>수거예약 확정이후 확인할 수 있어요</div>
            </style.boldTexts>
            <style.texts>
              <div>수거할 공병은 주소지 집문 앞에 놓여져있어요</div>
              <div>출입이 제한되는 회사, 학교, 기숙사 등의 장소거나</div>
              <div>비밀번호 오류등의 사유로 출입이 어려운 경우</div>
              <div>마이페이지 &gt; 수거내역에서</div>
              <div>취소사유 선택 후 수거를 취소할 수 있어요</div>
            </style.texts>
            <GreenFullButton onClick={openModal} btnName={"다음"} />
          </>
        ) : pageNum === 4 ? (
          <>
            <style.title>수거예약을 확정했어요</style.title>
            <WhiteView
              btnName={[
                "소주병 ",
                <b style={{ color: "#009800" }}>{data?.sojuNum}병</b>,
                " | 맥주병 ",
                <b style={{ color: "#009800" }}>{data?.beerNum}병</b>,
                " | 기타 ",
                <b style={{ color: "#009800" }}>{data?.extraNum}병</b>,
              ]}
            />
            <WhiteView
              btnName={[
                <b style={{ color: "#009800" }}>총 보증금 {data?.money}원</b>,
                " 예상",
              ]}
            />
            <WhiteView
              btnName={[
                "2022년 11월 01일 ",
                <b style={{ color: "#009800" }}>오후 09:00까지</b>,
                " 수거예정",
              ]}
            />
            <WhiteView
              btnName={[
                <b style={{ color: "#009800" }}>공동현관 비밀번호</b>,
                " | ",
                data?.entrancePassword,
              ]}
            />
            <style.boldTexts>
              <div>수거예약 확인은 마이페이지 &gt; 수거내역에서</div>
              <div>다시 확인할 수 있어요</div>
            </style.boldTexts>
            <GreenFullButton
              onClick={() => navigator("/")}
              btnName={"홈으로 돌아가기"}
            />
          </>
        ) : null}
      </style.Wrap2>

      <Modal2
        open={modalOpen}
        close={closeModal}
        header="수거하기 전 다음 주의사항에 동의해주세요"
        button1={okModal}
        button1Content="수거예약 확정하기"
      >
        <style.check>
          <style.x onClick={checked1}>
            <div>{check1}</div>
            <div>
              <div>수거할 공병 개수를 확인했습니다</div>
            </div>
          </style.x>
          <style.x onClick={checked2}>
            <div>{check2}</div>
            <div>
              <div>수거할 공병을 수거하지 않을시</div>
              <div>패널티가 부과될 수 있음에 동의합니다</div>
            </div>
          </style.x>
          <style.x onClick={checked3}>
            <div>{check3}</div>
            <div>
              <div>선택한 수거예정시간을 확인했습니다</div>
            </div>
          </style.x>
          <style.x onClick={checked4}>
            <div>{check4}</div>
            <div>
              <div>선택한 수거예정시간 초과 후 수거시</div>
              <div>패널티가 부과될 수 있음에 동의합니다</div>
            </div>
          </style.x>
        </style.check>
      </Modal2>

      <Modal4
        open={errorModalOpen}
        close={closeErrorModal}
        header="확인해 주세요"
        button1={closeErrorModal}
        button1Content="확인"
      >
        주의사항에 모두 동의해주세요
      </Modal4>

      <Footer />
    </style.Wrap>
  );
}

export default BottleDetail;
