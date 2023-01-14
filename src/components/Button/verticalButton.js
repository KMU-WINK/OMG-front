import React from "react";
import * as style from "./styles";
function VerticalButton(props) {
  return (
    <style.VerticalButton onClick={props.content4}>
      <span>{props.content1}</span>
      <img src={props.content2} />
      <div>{props.content3}</div>
    </style.VerticalButton>
  );
}

export default VerticalButton;
