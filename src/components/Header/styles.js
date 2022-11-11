import styled from 'styled-components';

export const Wrap = styled.div`
  position: fixed;
  width: 100%;
  max-width: 480px;
  top: 0;
  z-index: 99;
  background-color: #ffffff;
`;
export const Title = styled.div`
  height: 50px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f1f1f5;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  
  > img {
    cursor: pointer;
    position: absolute;
    &:first-child {
      left: 20px;
    }
    &:last-child {
      right: 20px;
    }
    
   
  }
`;
