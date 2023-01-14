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
import moment from "@date-io/moment";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import "moment/locale/ko";

const { kakao } = window;

function BottleDetail(props) {
  const navigator = useNavigate();

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
  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);
  const okModal = () => {};

  const [mapCenter, setMapCenter] = useState({
    lat: DATA[indexNum].markerData.lat,
    lng: DATA[indexNum].markerData.lng,
  });

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_KEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      new kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
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
          position: new kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
          image: markerImage,
        });
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

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
            height: "230px",
          }}
        ></div>
      </style.map>
      <style.Wrap2>
        <style.address>{DATA[indexNum].address}</style.address>
        {pageNum === 1 ? ( //1페이지
          <>
            <style.infoContainer>
              <div>
                <style.profileImg
                  src={process.env.PUBLIC_URL + "/images/Common/Profile.svg"}
                />
                <style.userInfoBox>
                  <span style={{ fontWeight: "600" }}> 이유빈 </span>
                  <span>
                    수거 <b style={{ color: "#009800" }}> 1회 </b> | 등록{" "}
                    <b style={{ color: "#009800" }}> 2회 </b> | 공병지수{" "}
                    <b style={{ color: "#009800" }}> 30ml </b>
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
            <style.image
              src={process.env.PUBLIC_URL + "/images/Add/altImg.png"}
            />
            <style.banners>
              {DATA[indexNum].sojuNum !== 0 ? (
                <Banner
                  styleSoju
                  btnName={["소주병", <br />, DATA[indexNum].sojuNum, "병"]}
                />
              ) : (
                <></>
              )}
              {DATA[indexNum].beerNum !== 0 ? (
                <Banner
                  styleBeer
                  btnName={["맥주병", <br />, DATA[indexNum].beerNum, "병"]}
                />
              ) : (
                <></>
              )}
              {DATA[indexNum].extraNum !== 0 ? (
                <Banner
                  styleEtc
                  btnName={["기타", <br />, DATA[indexNum].extraNum, "병"]}
                />
              ) : (
                <></>
              )}
              <Banner
                style2
                btnName={["예상 보증금", <br />, DATA[indexNum].money, "원"]}
              />
              <Banner style3 btnName={["내부 이물질", <br />, "없어요"]} />
              <Banner style3 btnName={["깨진 부분", <br />, "없어요"]} />
            </style.banners>
            <style.etcFont>
              조회 {DATA[indexNum].click} | 관심 {DATA[indexNum].like}
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
                btnName={["소주병", <br />, DATA[indexNum].sojuNum, "병"]}
              />
              <BottleBanner
                style2
                style={{ margin: "0px", cursor: "default" }}
                btnName={["맥주병", <br />, DATA[indexNum].beerNum, "병"]}
              />
              <BottleBanner
                style3
                style={{ margin: "0px", cursor: "default" }}
                btnName={["기타", <br />, DATA[indexNum].extraNum, "병"]}
              />
            </style.bottleBanners>
            <WhiteView
              btnName={[
                <b style={{ color: "#009800" }}>
                  총 보증금 {DATA[indexNum].money}원
                </b>,
                " 예상",
              ]}
            />
            <style.title>수거예정시간을 선택해주세요</style.title>
            <WhiteFullButton
              style={{ justifyContent: "center" }}
              btnName={choiceDateTime}
            />
            <MuiPickersUtilsProvider utils={moment}>
              <DateTimePicker
                label="수거예정시간"
                inputVariant="outlined"
                value={selectedDate}
                onChange={handleDateChange}
                format="yyyy년 MM월 DD일 a hh:mm"
              />
            </MuiPickersUtilsProvider>
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
                <b style={{ color: "#009800" }}>{DATA[indexNum].sojuNum}병</b>,
                " | 맥주병 ",
                <b style={{ color: "#009800" }}>{DATA[indexNum].beerNum}병</b>,
                " | 기타 ",
                <b style={{ color: "#009800" }}>{DATA[indexNum].extraNum}병</b>,
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
        ) : (
          <></>
        )}
      </style.Wrap2>

      <Modal2
        open={modalOpen}
        close={closeModal}
        header="수거하기 전 다음 주의사항에 동의해주세요"
        button1={okModal}
        button1Content="수거예약 확정하기"
      >
        <style.check>
          <div>수거할 공병 개수를 확인했습니다.</div>
          <div>
            <div>수거할 공병을 수거하지 않을시</div>
            <div>패널티가 부과될 수 있음에 동의합니다</div>
          </div>
          <div>선택한 수거예정시간을 확인했습니다</div>
          <div>
            <div>선택한 수거예정시간 초과 후 수거시</div>
            <div>패널티가 부과될 수 있음에 동의합니다</div>
          </div>
        </style.check>
      </Modal2>

      <Footer />
    </style.Wrap>
  );
}

export default BottleDetail;
