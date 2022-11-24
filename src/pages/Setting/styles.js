import styled from 'styled-components';

export const Wrap = styled.div`
    background-color: #D9D9D9;
    padding-top: 62px;
  height: calc(100vh - 62px);
  > div {
    :nth-child(2), :nth-child(3){
      margin-bottom: 12px;
    }
  }
`;

export const SubTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  background-color: #ffffff;
  padding: 16px 20px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 19px 20px;
  font-size: 16px;
  color: #000000;
  > div {
    display: flex;
    align-items: center;
  }
  > div > img {
      margin-right: 25px;
  }
  > img {
    cursor: pointer;
  }
  > span {
    color: #7C7C7C;
  }
  .switch {
    border: 2px solid #009800;
    border-radius: 15px;
    width: 50px;
    height: 24px;
    position: relative;
    cursor: pointer;

    > div {
      border-radius: 70%;
      background-color: #009800;
      width: 18px;
      height: 18px;
      position: absolute;
      left: 4px;
    }
  }
`;
