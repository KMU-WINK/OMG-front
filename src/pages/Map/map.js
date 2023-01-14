import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";

import Footer from "../../components/Footer/footer";
import CircleButton from "../../components/Button/circleButton";
import PreviewInfoBox from "../../components/Map/previewInfoBox";

import { DATA } from "./data";
import BottomSheet from "../../components/BottomSheet/bottomSheet";
import { bottleService } from "../../apis/services/bottle";
import { UserInfoService } from "../../apis/utils/userInfo";

const { kakao } = window;

// marker 표시할 경도 위도 데이터
// 해당 등록 글에 대한 data
function Map(props) {
  const navigator = useNavigate();

  const [onClickData, setOnClickData] = useState();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);

  // marker 표시할 data
  const [mapCenter, setMapCenter] = useState({
    lat: 37.60952413391683,
    lng: 127.00306921724072,
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

  const handleMarkerClick = (item) => {
    return () => {
      console.log(`item: ${item}`);
      // console.log(`markerIdx : ${markerIdx}`);
      console.log(`bottomsheet : ${isBottomSheetOpen}`);
      // if (index !== markerIdx) {
      setIsBottomSheetOpen(false);
      // setMarkerIdx(index);
      setOnClickData(item);
      // }
    };
  };

  const [latRange, setLatRange] = useState([mapCenter.lat, mapCenter.lat]);
  const [lngRange, setLngRange] = useState([mapCenter.lng, mapCenter.lng]);
  const [bottleData, setBottleData] = useState();

  useEffect(() => {
    (async () => {
      try {
        setBottleData(await bottleService.getBottleList());
      } catch (e) {
        console.log(`map page: ${e}`);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(bottleData);
  }, [bottleData]);

  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     // GeoLocation을 이용해서 접속 위치를 얻어옵니다
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setMapCenter(position.coords.latitude, position.coords.longitude);
  //       console.log(mapCenter);
  //     });
  //   } else {
  //     console.log("현재 위치를 불러올 수 없습니다.");
  //   }
  // };

  useEffect(() => {
    try {
      // getLocation();
      let container = document.getElementById("map");
      let options = {
        center: new kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
        level: 4, // default zoom level
        minLevel: 2,
        maxLevel: 6,
      };

      let map = new kakao.maps.Map(container, options);

      // 지도가 이동, 확대, 축소로 인해 지도영역이 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
      kakao.maps.event.addListener(map, "bounds_changed", function () {
        // 지도 영역정보를 얻어옵니다
        let bounds = map.getBounds();

        // 영역정보의 남서쪽 정보를 얻어옵니다
        let swLatlng = bounds.getSouthWest();

        // 영역정보의 북동쪽 정보를 얻어옵니다
        let neLatlng = bounds.getNorthEast();

        setLatRange([
          swLatlng.toString().split("(").pop().split(",")[0],
          neLatlng.toString().split("(").pop().split(",")[0],
        ]);

        setLngRange([
          swLatlng.toString().split(",").pop().split(")")[0],
          neLatlng.toString().split(",").pop().split(")")[0],
        ]);
        setIsBottomSheetOpen(true);
      });

      // 마커 이미지의 이미지 주소
      let imageSrc = process.env.PUBLIC_URL + "/images/Common/markerIcon.svg";

      for (let i = 0; i < bottleData.length; i++) {
        // 마커 이미지의 이미지 크기
        const imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지 생성
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커 생성
        const marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(bottleData[i].lat, bottleData[i].lng), // 마커를 표시할 위치
          title: bottleData[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });

        // customOverlay
        const iwContent = document.createElement("div");
        iwContent.innerHTML = `
            <div style="font-size : 15px;">
            <span style= "display : inline-block; margin : 5px;">
            총 : ${
              bottleData[i].beerNum +
              bottleData[i].sojuNum +
              bottleData[i].extraNum
            }개
            </br>
            예상보증금 : ${bottleData[i].money}원<span>
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
          position: new kakao.maps.LatLng(bottleData[i].lat, bottleData[i].lng),
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
        kakao.maps.event.addListener(
          marker,
          "click",
          handleMarkerClick(bottleData[i])
        );
      }
    } catch (e) {
      console.log(e);
    }
    return () => {};
  }, [mapCenter.lat, mapCenter.lng, bottleData]);

  const calRange = (items) => {
    const filteredDatas = items.filter(
      (item) =>
        item.lat >= latRange[0] &&
        item.lat <= latRange[1] &&
        item.lng >= lngRange[0] &&
        item.lng <= lngRange[1]
    );
    return filteredDatas;
  };

  const previewInfos = () => {
    return calRange(bottleData).map((item) => (
      <PreviewInfoBox
        _id={item.id}
        sojuNum={item.sojuNum}
        beerNum={item.beerNum}
        extraNum={item.extraNum}
        money={item.money}
        address={item.address}
        // isLiked={item.likes.map((item) => {
        //   console.log(item);
        // })}
        clickNum={item.clicks}
        likeNum={item.likes.length}
      />
    ));
  };

  const onClickMarkerInfo = (item) => {
    return (
      <style.singleInfoWrapper>
        <style.BottomBtnWrap>
          <style.ShowListBtn>
            <CircleButton
              onClick={() => {
                setIsBottomSheetOpen(true);
              }}
              src={process.env.PUBLIC_URL + "/images/Map/mapListIcon.svg"}
            />
          </style.ShowListBtn>
        </style.BottomBtnWrap>
        <PreviewInfoBox
          _id={item.id}
          sojuNum={item.sojuNum}
          beerNum={item.beerNum}
          extraNum={item.extraNum}
          money={item.money}
          address={item.address}
          // isLiked={item.isLiked}
          clickNum={item.clicks}
          likeNum={item.likes.length}
        />
      </style.singleInfoWrapper>
    );
  };

  return (
    <style.Wrap>
      {bottleData ? (
        <div id="map" style={{ width: "100%", height: "100vh" }}>
          <style.TopWrap>
            <style.BackBtn>
              <CircleButton
                onClick={() => {
                  navigator(-1);
                }}
                src={process.env.PUBLIC_URL + "/images/Header/backIcon.svg"}
              />
            </style.BackBtn>
            <style.searchBar onSubmit={submitSearchInput}>
              <img
                src={process.env.PUBLIC_URL + "/images/Map/searchIcon.svg"}
              />
              <input
                type={"text"}
                placeholder="주소 검색"
                value={searchInput}
                onChange={handleInputChange}
              ></input>
            </style.searchBar>
          </style.TopWrap>
          <style.BottomWrap>
            {isBottomSheetOpen ? (
              <BottomSheet>{previewInfos()}</BottomSheet>
            ) : (
              onClickMarkerInfo(onClickData)
            )}
          </style.BottomWrap>
        </div>
      ) : null}
      <Footer />
    </style.Wrap>
  );
}

export default Map;
