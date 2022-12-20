import React, { useState } from "react";
import * as style from "./styles";
import propTypes from "prop-types";

function PreviewInfoBox(props) {
  const [like, setLike] = useState(props.isLiked);

  const handleLikeClick = () => {
    // console.log(props._id);
    //_id로 isLiked 갱신
    setLike((like) => !like);
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
        <style.Address>
          {props.address || "서울 성북구 솔샘로 6길 16-16"}
        </style.Address>
      </style.SubContent>
      <style.ExtraContent>{`조희 ${props.clickNum} | 관심 ${
        props.likeNum || 10
      }`}</style.ExtraContent>
      <style.DetailBtn
        onClick={() => {
          /*_id api request*/
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
  isLiked: propTypes.bool.isRequired,
  clickNum: propTypes.number.isRequired,
  likeNum: propTypes.number.isRequired,
};

export default PreviewInfoBox;
