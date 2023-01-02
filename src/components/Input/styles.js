import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  > span {
    font-weight: 600;
    font-size: 16px;
    color: #141414;
    margin-bottom: 10px;
  }
  > input {
    border: 2px solid #E0E0E0;
    border-radius: 30px;
    padding: 12px 15px;
    font-weight: 400;
    font-size: 18px;
    
    :hover, :focus-visible {
      border: 2px solid #009800;
      outline: none;
      transition: .5s ease;
    }
  }
`;

