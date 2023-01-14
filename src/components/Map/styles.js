import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  background: #ffffff;
  padding: 20px;
  // width: 400px;
  width: 80vw;
  max-width: 400px;
  height: 130px;
  margin-bottom: 10px;
  border-radius: 30px;
  font-family: "Inter";
  color: #000000;
  font-style: normal;
  z-index: 9;
`;

export const MainContent = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 9px;
  z-index: 99;

  > img {
    float: right;
    cursor: pointer;
  }
`;

export const BottleType = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

export const BottleNum = styled.span`
  display: inline-block;
  margin-right: 5px;
  color: #009800;
`;

export const SubContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const Money = styled.span`
  display: inline-block;
  font-weight: 600;
  color: #009800;
  margin-bottom: 8px;
`;

export const Address = styled.div``;

export const ExtraContent = styled.div`
  position: absolute;

  bottom: 17px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #535353;
`;

export const DetailBtn = styled.div`
  background: #009800;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  width: 97px;
  height: 51px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  float: right;

  color: #ffffff;
`;
