import React from "react";

import * as style from "./styles";

const BottomSheetHeader = (props) => {
  return (
    <style.HeaderWrapper>
      <style.Handle ref={props.sheet} />
    </style.HeaderWrapper>
  );
};

export default BottomSheetHeader;
