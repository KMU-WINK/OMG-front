import React from "react";
import * as style from "./styles";

function Input(props) {
  return (
    <style.Wrap>
      <span>{props.title}</span>
      <input
        name={props.name}
        onClick={props.onClick}
        type={"text"}
        placeholder={props.title + "을 입력해주세요 "}
        onChange={props.onChange}
        value={props.value}
      />
    </style.Wrap>
  );
}

export default Input;
