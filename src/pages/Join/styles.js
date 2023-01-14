import styled from "styled-components";
import React from "react";

export const Wrap = styled.div`
  > div:last-child {
    padding: 20px;
  }
`;
export const InputWrap = styled.div`
  > div > hr {
    margin: 20px 0;
    width: 100%;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  > div:last-child {
    margin-bottom: 60px;
    > div {
      display: flex;
      gap: 10px;

      :nth-child(2) {
        margin: 20px 0 8px 0;
      }
    }
  }
`;

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  z-index: 100;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    background-color: #ffffff;
    width: 80%;
    height: 80%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
