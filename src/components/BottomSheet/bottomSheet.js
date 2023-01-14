import React, { useRef, useEffect } from "react";
import propTypes from "prop-types";

import * as style from "./styles";
import useBottomSheet from "./useBottomSheet";
import CircleButton from "../Button/circleButton";
import {
  MAX_Y,
  MIN_Y,
  MIN_BOTTOM_SHEET_HEIGHT,
  MAX_BOTTOM_SHEET_HEIGHT,
} from "./constants";

function BottomSheet({ children }) {
  const { sheet, content } = useBottomSheet();
  const isBottomSheetOpen = useRef(true);

  const handleBottomSheet = (e) => {
    isBottomSheetOpen.current = !isBottomSheetOpen.current;
    if (isBottomSheetOpen.current) {
      content.current.style.setProperty("transform", `translateY(${MAX_Y}px)`);
      content.current.style.setProperty(
        "height",
        `${MAX_BOTTOM_SHEET_HEIGHT}px`
      );
    } else {
      content.current.style.setProperty("transform", `translateY(${MIN_Y}px)`);
      content.current.style.setProperty(
        "height",
        `${MIN_BOTTOM_SHEET_HEIGHT}px`
      );
    }
  };

  return (
    <style.Wrapper ref={content}>
      <style.BottomBtnWrap>
        <style.ShowListBtn
          style={{ display: children.length === 0 ? "none" : "" }}
        >
          <CircleButton
            onClick={() => {
              handleBottomSheet();
            }}
            src={process.env.PUBLIC_URL + "/images/Map/mapListIcon.svg"}
          />
        </style.ShowListBtn>
      </style.BottomBtnWrap>
      <style.BottomSheetWrapper
        style={{ display: children.length === 0 ? "none" : "" }}
      >
        <style.HeaderWrapper ref={sheet}>
          <style.Handle />
        </style.HeaderWrapper>
        <style.BottomSheetContent>{children}</style.BottomSheetContent>
      </style.BottomSheetWrapper>
    </style.Wrapper>
  );
}

export default BottomSheet;
