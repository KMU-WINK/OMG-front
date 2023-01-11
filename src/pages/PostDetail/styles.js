import styled from 'styled-components';

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 480px;
`;

export const infoContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    justify-content: center;
`;

export const profileImg = styled.img`
    width: 36px;
    height: 36px;
`

export const userInfoBox = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-left: 17px;
`;

export const title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #000000;
    margin-top: 38px;
    margin-left: 10%;
`;

export const content = styled.div`
    width: 80%;
    height: fit-content;
    min-height: 100px;
    margin-top: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    margin-top: 25px;
    margin-left: 10%;
`;

export const reactionBox = styled.div`
    width: 100%;
    max-width: 480px;
    height: fit-content;
    display: flex;
    justify-content: flex-end;
    margin-top: 22px;

    padding-bottom: 12px;
    border-bottom: 1.5px solid #E9E9E9;
    border-top: none; border-left: none; border-right: none;
`;

export const reactionImg = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 5px;
    margin-left: 15px;
`

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    > input {
        bottom: 0;
        z-index: 99;
        position: fixed;
        width: 100%;
        max-width: 400px;
        height: 43px;
        background: rgba(217, 217, 217, 0.5);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
        border:none;
        border-radius: 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #7A7171;
        padding-left: 30px;
        outline: none;
        margin-bottom: 80px;
    }
    > img {
        width: 24px;
        height: 24px;
        bottom: 0;
        z-index: 99;
        position: fixed;
        margin-bottom: 89px;
        margin-left: 18%;
        cursor: pointer;
    }
`;

export const menuModalBack = styled.div`
    width: 100%;
    height: 100%;
    max-width: 480px;
    position: fixed;
    z-index: 99;
    top:0; bottom: 0; 
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
`;

export const menuModal = styled.div`
    position: fixed;
    bottom: 0;
    margin-bottom: 80px;
    width: 440px;
    height: 195px;
    background: #ffffff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    font-size: 18px;
`
