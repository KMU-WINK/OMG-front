import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  position: fixed;
  z-index: 9;
  bottom: 40px;
  width: 480px;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: 200px;

  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: transform 650ms ease-out; /*바텀시트 애니메이션 속도*/
`;

export const BottomSheetContent = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  margin: auto;
`;

export const HeaderWrapper = styled.div`
  height: 24px;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  position: relative;
  padding-top: 12px;
  padding-bottom: 4px;
`;

export const Handle = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background-color: #dee2e6;
  margin: auto;
`;
