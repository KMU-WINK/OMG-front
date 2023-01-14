import styled from 'styled-components';

export const Wrap = styled.div`
    padding: 60px 20px 0;
`;

export const LogoBlock = styled.div`
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    > img {
        width: 200px;
        height: 200px;
    }
`;

export const InputBlock = styled.div`
    margin-bottom: 40px;
    
    >div {
        &:first-child {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 18px;
        }
    }
`;

export const LoginSetting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  > span, label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
  }
`;
export const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px
`;


