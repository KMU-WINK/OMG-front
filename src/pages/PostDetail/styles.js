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
    margin-top: 92px;
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