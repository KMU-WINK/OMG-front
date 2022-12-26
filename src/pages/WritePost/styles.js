import styled from 'styled-components';

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 480px;
`;

export const headerWrap = styled.div`
    position: fixed;
    width: 100%;
    max-width: 480px;
    top: 0;
    z-index: 99;
    background-color: #ffffff;
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
    margin-left: 80%;
    font-size: 16px;
    line-height: 17px;
    font-weight: 700;
    color: #FFFFFF;
`;

export const titleInput = styled.input`
    width: 100%;
    height: 50px;
    background:  #ffffff;
    border-bottom: 1.5px solid #E9E9E9;
    border-top: none; border-left: none; border-right: none;
    margin-top: 55px;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 19px;
    color: #7A7171; 
    outline: none;
`;

export const cardBox = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
`;

export const noticeCard = styled.div`
    width: 439px;
    height: 175px;
    background: rgba(0, 162, 0, 0.8);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    color: #ffffff;
    white-space: pre-line;
    padding-left: 30px;
    padding-top: 27px;
    font-size: 18px;
    text-align: start;
    line-height: 30px;
`;

export const line = styled.div`
    width: 439px;
    height: fit-content;
    display: flex;
    flex-direction: row;
`;

export const contentInput = styled.input`
    width: 100%;
    height: fit-content;
    background:  #ffffff;
    border: none;
    margin-top: 30px;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 19px;
    color: #7A7171; 
    outline: none;
`;