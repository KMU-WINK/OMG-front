import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";

import Footer from "../../components/Footer/footer";
import CircleButton from "../../components/Button/circleButton";
import PreviewInfoBox from "../../components/Map/previewInfoBox";

import { MARKERDATA, DATA } from "./data";

const { kakao } = window;

// marker 표시할 경도 위도 데이터
// 해당 등록 글에 대한 data
function Map(props) {
  const navigator = useNavigate();

  // marker 표시할 data
  const [markerPosition, setMarkerPosition] = useState();
  const [latitude, setLatitude] = useState(37.60983939384303);
  const [longitude, setLongitude] = useState(126.99454107397042);
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    setMarkerPosition(MARKERDATA);
  }, []);

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_KEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      new kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: 3, // default zoom level
          minLevel: 2,
          maxLevel: 6,
        };
        let map = new kakao.maps.Map(container, options);

        // 마커 이미지의 이미지 주소
        let imageSrc = process.env.PUBLIC_URL + "/images/Common/markerIcon.svg";

        for (let i = 0; i < markerPosition.length; i++) {
          // 마커 이미지의 이미지 크기
          const imageSize = new kakao.maps.Size(24, 35);

          // 마커 이미지를 생성
          const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          // 마커를 생성
          const marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(
              markerPosition[i].lat,
              markerPosition[i].lng
            ), // 마커를 표시할 위치
            title: markerPosition[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [latitude, longitude, markerPosition]);

  const previewInfos = () => {
    return DATA.map((item) => (
      <PreviewInfoBox
        _id={item._id}
        sojuNum={item.sojuNum}
        beerNum={item.beerNum}
        extraNum={item.extraNum}
        money={item.money}
        address={item.address}
        isLiked={item.isLiked}
        clickNum={item.click}
        likeNum={item.like}
      />
    ));
  };

  return (
    <style.Wrap>
      <div id="map" style={{ width: "100%", height: "100vh" }}>
        <style.TopWrap>
          <style.BackBtn>
            <CircleButton
              onClick={() => {
                navigator("/main");
              }}
              src={process.env.PUBLIC_URL + "/images/Header/backIcon.svg"}
            />
          </style.BackBtn>
          <style.searchBar>
            <img src={process.env.PUBLIC_URL + "/images/Map/searchIcon.svg"} />
            <input
              placeholder="주소 검색"
              value={searchInput}
              onChange={handleInputChange}
            ></input>
          </style.searchBar>
        </style.TopWrap>
        <style.BottomWrap>
          <style.BottomBtnWrap>
            <style.ShowListBtn>
              <CircleButton
                onClick={() => {
                  navigator("/main");
                }}
                src={process.env.PUBLIC_URL + "/images/Map/mapListIcon.svg"}
              />
            </style.ShowListBtn>
          </style.BottomBtnWrap>
          <style.BottomInfoBoxWrap>{previewInfos()}</style.BottomInfoBoxWrap>
        </style.BottomWrap>
      </div>
      <Footer />
    </style.Wrap>
  );
}

export default Map;
