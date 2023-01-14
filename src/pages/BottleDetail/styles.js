import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 70px;
`;

export const map = styled.div`
    width: 100%;
    height: 230px;
    background-color: gray;
`;

export const Wrap2 = styled.div`
    margin: -30px 0 0 0;
    padding: 0px 20px;
    gap: 15px;
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 30px 30px 0 0;
`;

export const address = styled.div`
    margin-top: -25px;
    background: rgba(0, 152, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 30px;
    padding: 0px 20px;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
`;

export const infoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
  > div {
    display: flex;
    align-items: center;
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

export const image = styled.img`
    object-fit: cover;
    width: 440px;
    height: 180px;
    border-radius: 30px;
    background: #D9D9D9;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
`;

export const banners = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
`;

export const etcFont = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #535353;
    margin-bottom: -5px;
`;

export const title = styled.div`
    margin: 10px 0 0 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
`;

export const bottleBanners = styled.div`
    display: flex;
    gap: 20px;
`;