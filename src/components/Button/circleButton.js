import React from "react";
import propTypes from "prop-types";

import * as style from "./styles";
function CircleButton(props) {
  return (
    <style.CircleButton>
      <img onClick={props.onClick} src={props.src} />
    </style.CircleButton>
  );
}

CircleButton.propTypes = {
  onClick: propTypes.func.isRequired,
  src: propTypes.string,
};

export default CircleButton;
