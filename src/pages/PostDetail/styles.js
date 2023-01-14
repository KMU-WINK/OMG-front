import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 480px;
`;

export const infoContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  //justify-content: center;
  margin-left: 10%;
  @media screen and (max-width: 430px) {
    > span {
      font-size: 14px;
    }
    margin-left: 7%;
  }
`;

export const ProfileImg = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;

  @media screen and (max-width: 430px) {
    width: 32px;
    height: 32px;
  }
`;

export const userInfoBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-left: 20px;

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
  margin-top: 38px;
  margin-left: 10%;

  @media screen and (max-width: 430px) {
    margin-top: 28px;
    font-size: 16px;
    margin-left: 7%;
  }
`;

export const content = styled.div`
  width: 80%;
  height: fit-content;
  min-height: 100px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  margin-top: 25px;
  margin-left: 10%;

  @media screen and (max-width: 430px) {
    margin-top: 18px;
    font-size: 14px;
    margin-left: 7%;
  }
`;

export const reactionBox = styled.div`
  width: 100%;
  max-width: 480px;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  margin-top: 22px;
  padding-bottom: 12px;

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
  margin-right: 5px;
  margin-left: 15px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  z-index: 99;
  max-width: 440px;
  padding: 0 20px;
  bottom: 80px;
  height: 43px;
  background: rgba(217, 217, 217, 0.5);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: auto;
  > input {
    border: none;
    font-weight: 400;
    font-size: 16px;
    color: #7a7171;
    width: 100%;
    outline: none;
    background-color: transparent;
  }
  > img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  @media screen and (max-width: 430px) {
    width: 85%;
    margin: 0 10px;
  }
`;

export const menuModalBack = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 480px;
  position: fixed;
  z-index: 99;
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
  height: 195px;
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 430px) {
    width: 365px;
    height: 170px;
    > span {
      font-size: 16px;
    }
  }
`;

export const underLine = styled.div`
  width: 100%;
  max-width: 480px;
  margin-top: 15px;
  border-bottom: 1.5px solid #e9e9e9;
  border-top: none;
  border-left: none;
  border-right: none;
`;

export const UserImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;

  @media screen and (max-width: 430px) {
    width: 28px;
    height: 28px;
  }
`;

export const CommentInfoBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  @media screen and (max-width: 430px) {
    > span {
      font-size: 14px;
    }
  }
`;
