import styled from "styled-components";

export const Wrap = styled.div`
  position: sticky;
  width: 100%;
  max-width: 480px;
  top: 0;
  z-index: 99;
  background-color: #ffffff;
`;
export const Title = styled.div`
  height: 50px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f1f1f5;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  > img {
    cursor: pointer;
    position: absolute;
    &:first-child {
      left: 20px;
    }
    &:last-child {
      right: 20px;
    }
  }
  > button {
    all: unset;
    padding: 2px 12px;
    background: #009800;
    position: absolute;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    cursor: pointer;
    font-size: 16px;
    right: 20px;
    font-weight: 700;
    color: #ffffff;
  }
`;
