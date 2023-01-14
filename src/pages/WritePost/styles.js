import styled from 'styled-components';

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 480px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: calc(100vh - 100px);
`;

export const headerContent = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #f1f1f5;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  
    > img {
        cursor: pointer;
        position: absolute;
        &:first-child {
        left: 20px;
        }
        &:last-child {
        left: 20px;
        }
    }
    `;

export const btnWrite = styled.button`
    width: 65px;
    height: 40px;
    background: #009800;
    position: absolute;
    border: none;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 30px; 
    cursor: pointer;
    right: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #FFFFFF;
`;

export const titleInput = styled.input`
    width: 100%;
    flex: 1 0 50px;
    background:  #ffffff;
    border-bottom: 1.5px solid #E9E9E9;
    border-top: none; 
    border-left: none; 
    border-right: none;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 19px;
    color: #7A7171; 
    outline: none;
`;

export const cardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const noticeCard = styled.div`
    background: rgba(0, 162, 0, 0.8);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    color: #ffffff;
    font-size: 18px;
    padding: 32px 20px;
    margin-top: 20px;
`;

export const line = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
  
  > button {
    all: unset;
    cursor: pointer;
    position: absolute;
    top: -8px;
    right: 20px;
  }
`;

export const contentInput = styled.textarea`
    background:  #ffffff;
    border: none;
    font-weight: 400;
    font-size: 19px;
    color: #7A7171; 
    outline: none;
    margin-top: 20px;
    resize: none;
    height: 100%;
`;