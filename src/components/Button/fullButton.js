import React from "react";
import * as style from "./styles";
function FullButton(props) {
  return (
    <style.fullButton onClick={props.onClick} id={props.id}>
      {props.btnName}
    </style.fullButton>
  );
}

export default FullButton;
