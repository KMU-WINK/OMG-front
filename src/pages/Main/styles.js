import styled from "styled-components";

export const Wrap = styled.div`
  max-width: 480px;
  background: #009800;
  display: flex;
  flex-direction: column;
  margin-bottom: 51px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 20px;
  gap: 10px;

  > img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const Top2 = styled.div`
  margin: 10px 20px;
  > h1 {
    color: white;
    font-weight: 600;
    font-size: 20px;
    margin: 0px;
  }
`;

export const buttons = styled.div`
  margin: -80px 20px 10px 20px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

export const Wrap2 = styled.div`
  margin: 85px 0 0 0;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 30px 30px 0 0;
`;

export const title = styled.div`
  margin: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h1 {
    margin: 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  > span {
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    color: #009800;
    cursor: pointer;
  }
`;

export const community = styled.div`
  background: #f5f5f5;
  border-radius: 30px;
  margin-bottom: 15px;
  padding: 10px 25px 10px 15px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

export const box = styled.div`
  margin: 0 20px 10px 20px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  padding: 15px 15px 0px 15px;
  display: flex;
  flex-direction: column;
`;

export const banners = styled.div`
  margin: 0 0 0px 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;
