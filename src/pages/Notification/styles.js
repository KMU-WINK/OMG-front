import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  height: calc(100vh - 50px);
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #ff0000;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 70%;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
