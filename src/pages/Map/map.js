import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";

import Footer from "../../components/Footer/footer";
import CircleButton from "../../components/Button/circleButton";
import PreviewInfoBox from "../../components/Map/previewInfoBox";

import { DATA } from "./data";
import BottomSheet from "../../components/BottomSheet/bottomSheet";

const { kakao } = window;

// marker 표시할 경도 위도 데이터
// 해당 등록 글에 대한 data
function Map(props) {
  const navigator = useNavigate();

  const [markerIdx, setMarkerIdx] = useState(-1);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);
  const [isMarkerOnClick, setIsMarkerOnClick] = useState(false);

  // marker 표시할 data
  // const [markerPosition, setMarkerPosition] = useState([]);
  const [mapCenter, setMapCenter] = useState({
    lat: 37.60983939384303,
    lng: 126.99454107397042,
  });

  // 지도 검색창 input 값
  const [searchInput, setSearchInput] = useState("");

  // 지도 검색창 handle
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // 지도 검색창 엔터키 검색
  const submitSearchInput = (e) => {
    // 페이지 리랜더링 방지
    e.preventDefault();

    const ps = new kakao.maps.services.Places();
    const placeSearchCB = function (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setMapCenter({
          lat: newSearch.y,
          lng: newSearch.x,
        });
      }
    };
    ps.keywordSearch(searchInput, placeSearchCB);
  };

  // customOverly mouse event
  const handleMouseOver = (map, marker, mapCustomOverlay) => {
    return () => {
      mapCustomOverlay.setMap(map);
    };
  };

  // customOverly mouse event
  const handleMouseOut = (mapCustomOverlay) => {
    return () => {
      mapCustomOverlay.setMap(null);
    };
  };

  const handleMarkerClick = (index) => {
    return () => {
      console.log(`index: ${index}`);
      console.log(`markerIdx : ${markerIdx}`);
      console.log(`markeronclick : ${isMarkerOnClick}`);
      console.log(`bottomsheet : ${isBottomSheetOpen}`);
      // if (index !== markerIdx) {
      setIsBottomSheetOpen(false);
      setMarkerIdx(index);
      // }
    };
  };

  // useEffect(() => {
  //   setMarkerPosition(MARKERDATA);
  // }, []);

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_KEY}&autoload=false&libraries=services`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      new kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
          level: 3, // default zoom level
          minLevel: 2,
          maxLevel: 6,
        };

        let map = new kakao.maps.Map(container, options);

        // 지도가 이동, 확대, 축소로 인해 지도영역이 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
        kakao.maps.event.addListener(map, "bounds_changed", function () {
          // 지도 영역정보를 얻어옵니다
          var bounds = map.getBounds();

          // 영역정보의 남서쪽 정보를 얻어옵니다
          var swLatlng = bounds.getSouthWest();

          // 영역정보의 북동쪽 정보를 얻어옵니다
          var neLatlng = bounds.getNorthEast();

          var message =
            "<p>영역좌표는 남서쪽 위도, 경도는  " +
            swLatlng.toString() +
            "이고 <br>";
          message +=
            "북동쪽 위도, 경도는  " + neLatlng.toString() + "입니다 </p>";

          // console.log(message);
        });

        // 마커 이미지의 이미지 주소
        let imageSrc = process.env.PUBLIC_URL + "/images/Common/markerIcon.svg";

        for (let i = 0; i < DATA.length; i++) {
          // 마커 이미지의 이미지 크기
          const imageSize = new kakao.maps.Size(24, 35);

          // 마커 이미지 생성
          const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          console.log(DATA);
          console.log(">>>>");
          // 마커 생성
          const marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(
              DATA[i].markerData.lat,
              DATA[i].markerData.lng
            ), // 마커를 표시할 위치
            title: DATA[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });

          // customOverlay
          const iwContent = document.createElement("div");
          iwContent.innerHTML = `
            <div style="font-size : 15px;">
            <span style= "display : inline-block; margin : 5px;">
            총 : ${DATA[i].beerNum + DATA[i].sojuNum + DATA[i].extraNum}개
            </br>
            예상보증금 : ${DATA[i].money}원<span>
            `;
          iwContent.style.borderRadius = "10px";
          iwContent.style.fontWeight = "500";
          iwContent.style.backgroundColor = "white";
          iwContent.style.position = "absolute";
          iwContent.style.bottom = "8px";
          iwContent.style.right = "11px";
          iwContent.style.display = "flex";
          iwContent.style.border = "2px solid #009800";

          const mapCustomOverlay = new kakao.maps.CustomOverlay({
            position: new kakao.maps.LatLng(
              DATA[i].markerData.lat,
              DATA[i].markerData.lng
            ),
            content: iwContent,
            yAnchor: 2.5,
          });

          // marker에 mouseevent 등록
          kakao.maps.event.addListener(
            marker,
            "mouseover",
            handleMouseOver(map, marker, mapCustomOverlay)
          );
          // marker에 mouseevent 등록
          kakao.maps.event.addListener(
            marker,
            "mouseout",
            handleMouseOut(mapCustomOverlay)
          );

          // marker click event 등록
          kakao.maps.event.addListener(marker, "click", handleMarkerClick(i));
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [mapCenter.lat, mapCenter.lng]);

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

  const onClickMarkerInfo = (index) => {
    console.log(DATA);
    console.log(index);
    return (
      <style.singleInfoWrapper>
        <style.BottomBtnWrap>
          <style.ShowListBtn>
            <CircleButton
              onClick={() => {
                setIsBottomSheetOpen(true);
                setMarkerIdx(-1);
              }}
              src={process.env.PUBLIC_URL + "/images/Map/mapListIcon.svg"}
            />
          </style.ShowListBtn>
        </style.BottomBtnWrap>
        <PreviewInfoBox
          _id={DATA[index]._id}
          sojuNum={DATA[index].sojuNum}
          beerNum={DATA[index].beerNum}
          extraNum={DATA[index].extraNum}
          money={DATA[index].money}
          address={DATA[index].address}
          isLiked={DATA[index].isLiked}
          clickNum={DATA[index].click}
          likeNum={DATA[index].like}
        />
      </style.singleInfoWrapper>
    );
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
          <style.searchBar onSubmit={submitSearchInput}>
            <img src={process.env.PUBLIC_URL + "/images/Map/searchIcon.svg"} />
            <input
              type={"text"}
              placeholder="주소 검색"
              value={searchInput}
              onChange={handleInputChange}
            ></input>
          </style.searchBar>
        </style.TopWrap>
        <style.BottomWrap>
          {/* {onClickMarkerInfo} */}
          {/* <style.BottomBtnWrap>
            <style.ShowListBtn>
              <CircleButton
                onClick={() => {
                  navigator("/main");
                }}
                src={process.env.PUBLIC_URL + "/images/Map/mapListIcon.svg"}
              />
            </style.ShowListBtn>
          </style.BottomBtnWrap> */}
          {/* {isMarkerOnClick ? onClickMarkerInfo(markerIdx) : null} */}
          {isBottomSheetOpen ? (
            <BottomSheet>{previewInfos()}</BottomSheet>
          ) : (
            onClickMarkerInfo(markerIdx)
          )}
        </style.BottomWrap>
      </div>
      <Footer />
    </style.Wrap>
  );
}

export default Map;
