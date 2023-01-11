import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap? props.gap : null};
  padding: ${(props) => props.padding? props.padding : null};
  border-bottom: ${(props) => props.wrap? '1px solid #E9E9E9' : null};
  cursor: ${(props) => props.wrap? 'pointer' : null};
`;

export const Column = styled(Flex)`
    flex-direction: column;
`;

export const Img = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 70px;
`;

export const Text = styled.span`
  font-size: ${(props) => props.size? props.size : null};
  font-weight: ${(props) => props.weight? props.weight : null};
`;