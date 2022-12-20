import styled from 'styled-components';

export const Wrap = styled.div`
    margin-top: 35px;
    width: 439px;
    height: 200px;
    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
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

export const contentBox = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 35px;
`;

export const title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #000000;
`;

export const content = styled.div`
    width: 370px;
    margin-top: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const reactionBox = styled.div`
    width: 92%;
    height: fit-content;
    display: flex;
    justify-content: flex-end;
    margin-top: 13px;
`;

export const reactionImg = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 5px;
    margin-left: 15px;
`