import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  padding: ${(props) => props.wrap ? "25px 20px 20px" : null};
`;

export const Col = styled(Row)`
  flex-direction: column;
  position: relative;
  
  > div {
    margin-bottom: 20px;
  }
  
  > button {
    position: absolute;
    
  }
`;


