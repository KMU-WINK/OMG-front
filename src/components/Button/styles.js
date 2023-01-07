import styled from 'styled-components';

export const fullButton = styled.div`
    background: #009800;
    border-radius: 30px;
    padding: 10px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
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
    cursor: pointer;
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

