import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 480px;
  position: relative;

  > div:nth-child(2) {
    padding: 24px 20px;
    height: calc(100vh - 100px);
  }
`;

export const Flex = styled.div`
  display: flex;
  margin-bottom: ${(props) => (props.wrap ? "20px" : null)};
  gap: ${(props) => (props.gap ? props.gap : null)};
  justify-content: ${(props) => (props.wrap ? "space-between" : null)};

  @media screen and (max-width: 400px) {
    flex-direction: ${(props) => (props.wrap ? "column" : null)};
    gap: ${(props) => (props.wrap ? "4px" : null)};
  }
`;

export const profileImg = styled.img`
  width: 36px;
  height: 36px;

  @media screen and (max-width: 430px) {
    width: 32px;
    height: 32px;
  }
`;

export const userInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 430px) {
    > span {
      font-size: 14px;
    }
  }
`;

export const title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  margin-bottom: 12px;

  @media screen and (max-width: 430px) {
    font-size: 16px;
  }
`;

export const content = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  margin-bottom: 20px;

  @media screen and (max-width: 430px) {
    font-size: 14px;
  }
`;

export const reactionBox = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  @media screen and (max-width: 430px) {
    > span {
      margin-top: 2px;
      font-size: 12px;
    }
  }
`;

export const reactionImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  z-index: 99;
  padding: 8px 0;
  bottom: 80px;
  background: rgba(217, 217, 217, 0.5);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  > input {
    all: unset;
    padding: 0 10px;
    flex: 1 1 100%;
    border: none;
    font-size: 16px;
    color: #7a7171;
    background-color: transparent;
  }
  > img {
    flex: 1 1 24px;
    cursor: pointer;
    padding-right: 10px;
  }
`;

export const menuModalBack = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 480px;
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
`;

export const menuModal = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 80px;
  width: 440px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > span {
    padding: 16px 0;
  }

  @media screen and (max-width: 430px) {
    width: 365px;
    > span {
      font-size: 16px;
    }
  }
`;

export const underLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #e9e9e9;
`;
