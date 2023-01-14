import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 480px;
  position: relative;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 20px;
  height: calc(100vh - 100px);

  > div:first-child {
    background: rgba(217, 217, 217, 0.5);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 12px 20px;
    margin-bottom: 20px;
  }
`;

export const Search = styled.input`
  all: unset;
  font-size: 20px;
  color: #7a7171;
  width: 100%;

  @media screen and (max-width: 430px) {
    font-size: 16px;
  }
`;

export const MainTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;

  @media screen and (max-width: 430px) {
    font-size: 16px;
  }
`;

export const BoardContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const box = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
`;

export const WriteImg = styled.img`
  padding: 24px;
  background: #009800;
  border: none;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 70%;
  cursor: pointer;
  position: absolute;
  bottom: 70px;
  right: 20px;
`;
