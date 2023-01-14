import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
`;

export const FirstContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:nth-child(2) {
    margin-bottom: 16px;
    text-align: center;

    > span {
      font-weight: 700;
      font-size: 18px;
      color: #000000;

      :nth-child(2) {
        font-size: 20px;
        color: #009800;
        margin: 0 10px;
      }
    }
  }
`;

export const ImgBlock = styled.div`
  position: relative;
  cursor: pointer;
  padding-top: 30px;
  margin-bottom: 20px;
  > img {
    object-fit: cover;
    :first-child {
      width: 160px;
      height: 160px;
      border-radius: 70%;
      background: #d9d9d9;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    }
    :last-child {
      position: absolute;
      right: -5px;
      bottom: -5px;
    }
  }
`;
export const RecordBlock = styled.div`
  display: flex;
  background: #009800;
  color: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin-bottom: 15px;
  width: 90%;
  padding: 12px 0;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    flex: 1 1 33%;

    :nth-child(2) {
      border-left: 2px solid #ffffff;
      border-right: 2px solid #ffffff;
    }
    > span {
      font-size: 18px;
      :first-child {
        font-weight: 700;
      }
    }
  }
`;

export const SecondContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 2px solid #e0e0e0;

  > span:first-child {
    font-weight: 700;
    font-size: 18px;
    color: #000000;
  }

  > span:last-child {
    font-weight: 700;
    font-size: 20px;
    color: #000000;

    > span:first-child {
      font-size: 22px;
      color: ${(props) => props.color};
      margin-right: 5px;
    }
  }
`;

export const Dimmed = styled.div`
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    max-width: 380px;
    width: 100%;
    height: 480px;
    margin: 20px;
    border-radius: 12px;
    text-align: center;
  }
  > div > div {
    width: 80%;
  }
`;
