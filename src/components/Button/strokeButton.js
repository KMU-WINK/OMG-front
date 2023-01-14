import React from "react";
import * as style from "./styles";
function StrokeButton(props) {
  return (
    <style.strokeButton onClick={props.onClick}>
      <span>{props.btnName}</span>
    </style.strokeButton>
  );
}

export default StrokeButton;
