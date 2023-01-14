import React, { useState } from "react";
import * as style from "./styles";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigator = useNavigate();
  const data = {
    id: props.id,

    name: props.name,
    getCnt: props.getCnt,
    setCnt: props.setCnt,
    point: props.point,

    title: props.title,
    contents: props.contents,

    likes: props.likes,
    comments: props.comments,

    bottleSell: props.bottleSell, //등록 횟수
    bottleBuy: props.bottleBuy, // 수거 횟수
  };

  const handleClick = () => {
    navigator("/post-detail", { state: data });
  };

  return (
    <style.Wrap onClick={handleClick}>
      <style.infoContainer>
        <div>
          <style.profileImg
            src={process.env.PUBLIC_URL + "/images/Common/Profile.svg"}
          />
          <style.userInfoBox>
            <span> {props.name} </span>
            <span>
              {" "}
              수거{" "}
              <span style={{ color: "#009800" }}> {props.bottleBuy}회 </span> |
              등록{" "}
              <span style={{ color: "#009800" }}> {props.bottleSell}회 </span> |
              공병지수{" "}
              <span style={{ color: "#009800" }}> {props.point}ml </span>{" "}
            </span>
          </style.userInfoBox>
        </div>
        <span style={{ color: "#7A7171", fontSize: "14px" }}>2시간 전</span>
      </style.infoContainer>
      <style.contentBox>
        <style.title>{props.title}</style.title>
        <style.content>{props.contents}</style.content>
      </style.contentBox>
      <style.reactionBox>
        <style.reactionImg
          src={process.env.PUBLIC_URL + "/images/Board/Happy.svg"}
        />
        <span style={{ color: "#009800" }}> {props.likes} </span>
        <style.reactionImg
          src={process.env.PUBLIC_URL + "/images/Board/Message.svg"}
        />
        <span> {props.comments} </span>
      </style.reactionBox>
    </style.Wrap>
  );
}

export default Card;
