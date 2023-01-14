import React from "react";
import * as style from "./styles";
function View(props) {
  return (
    <style.View>
      <span onClick={props.onClick}>{props.contents}</span>
    </style.View>
  );
}

export default View;
