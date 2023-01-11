import { useRef, useEffect } from "react";
import {
  MAX_BOTTOM_SHEET_HEIGHT,
  MIN_BOTTOM_SHEET_HEIGHT,
  MAX_Y,
} from "./constants";

export default function useBottomSheet() {
  const sheet = useRef(null);

  const content = useRef(null);

  const isBottomSheetOpen = useRef(false);

  const handleTouchStart = (e) => {
    // 이벤트 버블링 방지
    e.stopPropagation();
    console.log("handle");

    isBottomSheetOpen.current = !isBottomSheetOpen.current;
    if (isBottomSheetOpen.current) {
      content.current.style.setProperty("transform", `translateY(${MAX_Y}px)`);
      content.current.style.setProperty(
        "height",
        `${MAX_BOTTOM_SHEET_HEIGHT}px`
      );
    } else {
      content.current.style.setProperty("transform", `translateY(0px)`);
      content.current.style.setProperty(
        "height",
        `${MIN_BOTTOM_SHEET_HEIGHT}px`
      );
    }
  };

  useEffect(() => {
    sheet.current.addEventListener("mouseup", handleTouchStart);
  }, []);

  return { sheet, content };
}
