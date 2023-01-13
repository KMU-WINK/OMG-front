import styled from "styled-components";

export const fullButton = styled.div`
  background: #009800;
  border-radius: 30px;
  padding: 10px;
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
export const strokeButton = styled.div`
  background: #ffffff;
  border: 2px solid #009800;
  border-radius: 30px;
  padding: 10px;
  color: #141414;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const whiteFullButton = styled.div`
  background: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 0px 20px;
  height: 50px;
  color: #000000;
  font-weight: 400;
  font-size: 16px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: .2s ease;
`;

export const greenFullButton = styled.div`
  background: #009800;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 30px;
  padding: 0px 20px;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: .2s ease;
`;

export const CircleButton = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: #ffffff;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
`;
export const VerticalButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: rgba(49, 173, 49, 0.5);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 15px;
  width: 110px;
  height: 130px;
  cursor: pointer;
  > span {
    color: white;
    font-weight: 600;
    font-size: 13px;
    line-height: 17px;
    text-align: center;
  }
  > img {
    height: 50px;
    width: 50px;
  }
  > div {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
`;