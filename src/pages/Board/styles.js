import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

export const Search = styled.input`
  width: 100%;
  max-width: 400px;
  height: 50px;
  background: rgba(217, 217, 217, 0.5);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border:none;
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 19px;
  color: #7A7171;
  padding-left: 30px;
`;

export const mainTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #000000;
  margin-top: 45px;
  margin-left: 35px;
`;

export const boardContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;