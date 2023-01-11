import styled from 'styled-components';

export const Wrap = styled.div`
`;

export const Contents = styled.div`
    padding: 25px 20px 20px;
  > div {
    :not(:nth-child(1)) {
      margin-bottom: 20px;
    }
  }
`;

export const SubTitle = styled.div`
  font-size: 18px;
  color: #000000;
  margin-bottom: 30px;
`;

