import styled from "styled-components";

export const Wrap = styled.div``;

export const TopWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 17px 20px 0px 20px;
`;

export const BackBtn = styled.div`
  margin-right: 9px;
  cursor: pointer;
  z-index: 9;
`;

export const searchBar = styled.form`
  flex: 3;
  height: 22px;
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 14px;
  z-index: 9;

  display: flex;

  > img {
    margin-right: 14px;
  }
  > input {
    height: 100%;
    width: 100%;
    border: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;

    :focus {
      outline: none;
    }
  }
`;

export const BottomWrap = styled.div``;

export const BottomBtnWrap = styled.div``;

export const ShowListBtn = styled.div`
  display: inline-block;
  position: absolute;
  right: 20px;
  bottom: 200px;
  z-index: 9;
`;

export const BottomInfoBoxWrap = styled.div`
  width: 440px;
  bottom: 70px;
  min-height: 180px;
  max-height: 350px;
  overflow: scroll;
  background: #ffffff;
  border-radius: 30px;
  z-index: 9;
`;

export const singleInfoWrapper = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 70px;
`;
