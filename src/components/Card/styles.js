import styled from 'styled-components';

export const Wrap = styled.div`
    padding: 20px;
    margin: 20px;
    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
`;

export const infoContainer = styled.div`
    width: 100%;
    display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  
  > div {
    display: flex;
    gap: 12px;
  }
`;

export const profileImg = styled.img`
    width: 36px;
    height: 36px;
`

export const userInfoBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const contentBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #000000;
  margin-bottom: 8px;
`;

export const content = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  margin-bottom: 20px;
`;

export const reactionBox = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const reactionImg = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 5px;
    margin-left: 15px;
`