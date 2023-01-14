import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 480px;
  margin-bottom: 55px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Search = styled.input`
  width: 80%;
  max-width: 400px;
  margin: 0 10px;
  height: 55px;
  background: rgba(217, 217, 217, 0.5);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 19px;
  color: #7a7171;
  padding-left: 30px;
  outline: none;

  @media screen and (max-width: 430px) {
      height: 40px;
      font-size: 16px;
    }
`;

export const mainTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #000000;
  margin-top: 50px;
  margin-left: 35px;

  @media screen and (max-width: 430px) {
      margin-top: 40px;
  }
`;

export const boardContent = styled.div`
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
export const btnWrite = styled.button`
  width: 62px;
  height: 62px;
  background: #009800;
  border: none;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  cursor: pointer;
  position: fixed;
  margin-left: 20%;
  bottom: 65px;

  @media screen and (max-width: 430px) {
    width: 55px;
    height: 55px;

    right: 20px;
    bottom: 70px;
  }
`;

export const writeImg = styled.img`
  width: 30px;
  height: 30px;
`;
