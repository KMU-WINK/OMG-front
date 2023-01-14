import styled from "styled-components";

export const Wrap = styled.div`
  position: fixed;
  max-width: 480px;
  width: 100%;
  bottom: 0;
  z-index: 99;
  background-color: #ffffff;
`;
export const Menu = styled.div`
  max-width: 480px;
  height: 50px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid #f1f1f5;
`;

export const BtnLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 24px;
    cursor: pointer;
  }
`;
