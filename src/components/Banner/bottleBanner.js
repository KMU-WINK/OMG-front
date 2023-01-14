import React from "react";
import * as style from "./styles";
function BottleBanner(props) {
  return (
    <style.bottleBanner {...props} onClick={props.onClick} style={props.style}>
      <span>{props.btnName}</span>
    </style.bottleBanner>
  );
}

export default BottleBanner;
