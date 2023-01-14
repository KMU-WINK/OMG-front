import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin-bottom: 20px;

  > div {
    padding: 20px;
  }
`;

export const infoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  > div {
    display: flex;
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
  margin-left: 20px;

  @media screen and (max-width: 430px) {
    > span {
      font-size: 14px;
      margin-left: 0px;
    }
  }
`;

export const contentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  margin-bottom: 8px;

  @media screen and (max-width: 430px) {
    font-size: 14px;
  }
`;

export const content = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 20px;

  @media screen and (max-width: 430px) {
    font-size: 14px;
  }
`;

export const reactionBox = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 430px) {
    > span {
      font-size: 14px;
    }
  }
`;

export const reactionImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  margin-left: 15px;

  @media screen and (max-width: 430px) {
    width: 20px;
    height: 20px;
  }
`;
