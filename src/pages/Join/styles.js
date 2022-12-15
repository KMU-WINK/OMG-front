import styled from 'styled-components';

export const Wrap = styled.div`
    margin-top: 50px;
  
  >div:last-child {
    padding: 20px;
  }
`;
export const InputWrap = styled.div`
  > hr {
    margin: 20px 0;
    width: 100%;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  > div:last-child {
    margin-bottom: 60px;
  }
`;
