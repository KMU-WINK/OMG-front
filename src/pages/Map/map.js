import React, { useEffect, useState } from "react";
import * as style from "./styles";

import Footer from "../../components/Footer/footer";

const { kakao } = window;

// level 의 상한선? 하한선? 있어야 할 듯!
function Map(props) {
  const [markerPosition, setMarkerPosition] = useState();
  const [latitude, setLatitude] = useState(37.60983939384303);
  const [longitude, setLongitude] = useState(126.99454107397042);

  useEffect(() => {
    setMarkerPosition([
      {
        title: "카카오",
        lat: 37.60983939384303,
        lng: 126.99454107397042,
      },
      {
        title: "생태연못",
        lat: 37.63983939384303,
        lng: 126.99454107397042,
      },
      {
        title: "텃밭",
        lat: 37.6193939384303,
        lng: 126.99454107397042,
      },
    ]);
  }, []);

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_KEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(latitude, longitude),
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

  return (
    <style.Wrap>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
      <Footer />
    </style.Wrap>
  );
}

export default Map;
