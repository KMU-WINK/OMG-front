import React from "react";

import * as style from "./styles";
import useBottomSheet from "./useBottomSheet";

function BottomSheet({ children }) {
  const { sheet, content } = useBottomSheet();

  return (
    <style.Wrapper ref={content}>
      <style.HeaderWrapper ref={sheet}>
        <style.Handle />
      </style.HeaderWrapper>
      <style.BottomSheetContent>{children}</style.BottomSheetContent>
    </style.Wrapper>
  );
}

export default BottomSheet;
