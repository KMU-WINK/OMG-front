import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import propTypes from "prop-types";
import { bottleService } from "../../apis/services/bottle";

function PreviewInfoBox(props) {
  const navigator = useNavigate();
  const [like, setLike] = useState(props.isLiked);
  const [data, setData] = useState(props);

  const handleLikeClick = (e) => {
    //_id로 isLiked 갱신
    if (like) {
      setLike(false);
      bottleService.deleteLike(props._id);
      setData({ ...data, likeNum: data.likeNum - 1 });
      console.log(data);
    } else {
      setLike(true);
      bottleService.addLike(props._id);
      setData({ ...data, likeNum: data.likeNum + 1 });
    }
  };

  return (
    <style.Wrap>
      <style.MainContent>
        <style.BottleType>소주병</style.BottleType>
        <style.BottleNum>{`${props.sojuNum}개`}</style.BottleNum>
        <style.BottleType>맥주병</style.BottleType>
        <style.BottleNum>{`${props.beerNum}개`}</style.BottleNum>
        <style.BottleType>기타</style.BottleType>
        <style.BottleNum>{`${props.extraNum}개`}</style.BottleNum>
        <img
          alt={"likeIcon"}
          src={
            like
              ? process.env.PUBLIC_URL + "/images/Common/likeFilledIcon.svg"
              : process.env.PUBLIC_URL + "/images/Common/likeIcon.svg"
          }
          onClick={handleLikeClick}
        />
      </style.MainContent>
      <style.SubContent>
        <style.Money>보증금 {props.money}원</style.Money> 예상
        <style.Address>{props.address}</style.Address>
      </style.SubContent>
      <style.ExtraContent>{`조희 ${props.clickNum} | 관심 ${data.likeNum}`}</style.ExtraContent>
      <style.DetailBtn
        onClick={async () => {
          // 공병 상세 페이지로 이동
          await bottleService.addClick(props._id);
          navigator(`/bottle-detail/${props._id}`);
        }}
      >
        상세보기
      </style.DetailBtn>
    </style.Wrap>
  );
}

PreviewInfoBox.propTypes = {
  _id: propTypes.string.isRequired,
  sojuNum: propTypes.number.isRequired,
  beerNum: propTypes.number.isRequired,
  extraNum: propTypes.number.isRequired,
  money: propTypes.number.isRequired,
  address: propTypes.string.isRequired,
  isLiked: propTypes.bool,
  clickNum: propTypes.number.isRequired,
  likeNum: propTypes.number.isRequired,
};

export default PreviewInfoBox;
