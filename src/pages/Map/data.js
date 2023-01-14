export const MARKERDATA_T = [
  {
    title: "카카오", // 등록_id
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
  {
    title: "집",
    lat: 37.60983939384303,
    lng: 127.01454107397042,
  },
];

const dataForm = [
  {
    _id: "1alsfoisjdfoa",
    title: "카카오",
    sojuNum: 10,
    beerNum: 1,
    extraNum: 0,
    money: 1000,
    address: "서울 성북구 솔샘로 6길 16-16",
    isLiked: false,
    click: 35,
    like: 10,
    position: {
      lat: 37.60983939384303,
      lng: 126.99454107397042,
    },
  },
  {
    _id: "2bosadijfaosdf",
    title: "생태연못",
    sojuNum: 20,
    beerNum: 10,
    extraNum: 1,
    money: 1500,
    address: "서울 성북구 솔샘로 6길 16-16",
    isLiked: true,
    click: 25,
    like: 6,
    position: {
      lat: 37.63983939384303,
      lng: 126.99454107397042,
    },
  },
];

export const DATA = [
  {
    _id: "1alsfoisjdfoa",
    title: "카카오",
    sojuNum: 10,
    beerNum: 1,
    extraNum: 0,
    money: 1000,
    address: "서울 성북구 솔샘로 6길 16-16",
    isLiked: false,
    clicks: 35,
    likes: [3, 2],
    lat: 37.60983939384303,
    lng: 126.99454107397042,
  },
  {
    _id: "2bosadijfaosdf",
    title: "생태연못",
    sojuNum: 20,
    beerNum: 10,
    extraNum: 1,
    money: 1500,
    address: "서울 성북구 솔샘로 6길 16-16",
    isLiked: true,
    clicks: 25,
    likes: [],
    lat: 37.63983939384303,
    lng: 126.99454107397042,
  },
  {
    _id: "3calsdfjaldskfja",
    title: "텃밭",
    sojuNum: 30,
    beerNum: 1,
    extraNum: 0,
    money: 2000,
    address: "서울 성북구 솔샘로 6길 16-16",
    isLiked: false,
    clicks: 35,
    likes: [3],
    lat: 37.6193939384303,
    lng: 126.99454107397042,
  },
  {
    _id: "4calsdfjaldskfja",
    title: "집",
    sojuNum: 40,
    beerNum: 1,
    extraNum: 0,
    money: 2500,
    address: "서울 성북구 솔샘로 6길 16-16",
    isLiked: false,
    clicks: 35,
    likes: [1, 2, 3],
    lat: 37.60983939384303,
    lng: 127.01454107397042,
  },
];

const getMarkerData = () => {
  let result = [];
  DATA.map((item) => {
    result.push({
      title: item.title,
      lat: item.lat,
      lng: item.lng,
    });
  });

  return result;
};

export const MARKERDATA = getMarkerData();
